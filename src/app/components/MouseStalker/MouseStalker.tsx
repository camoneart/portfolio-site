"use client";

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useSpring, animated } from "@react-spring/web";

// カスタムフックのメモ化
const useMousePosition = () => {
  const [position, setPosition] = useState(() => ({
    x: 0, // Initialize with a consistent value for SSR
    y: 0, // Initialize with a consistent value for SSR
  }));

  // mousemoveハンドラーをメモ化
  const updatePosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    // Set initial position once on the client after mount
    setPosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [updatePosition]); // updatePosition は useCallback でメモ化されているので依存配列に含めても問題ない

  return position;
};

const useInteractiveElementHover = () => {
  const [isHovering, setIsHovering] = useState(false);

  // ページ遷移時にホバー状態をリセット
  useEffect(() => {
    const resetHoverState = () => {
      setIsHovering(false);
    };

    // ページの可視性が変わった時にリセット
    document.addEventListener("visibilitychange", resetHoverState);
    // フォーカスが戻った時にリセット
    window.addEventListener("focus", resetHoverState);
    // ページ遷移を検知してリセット（Next.jsのクライアントサイド遷移対応）
    const handleRouteChange = () => {
      resetHoverState();
    };

    // Next.jsのページ遷移イベントをリスン
    window.addEventListener("popstate", handleRouteChange);

    // URLの変更を監視（pushState/replaceState対応）
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(history, args);
      resetHoverState();
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(history, args);
      resetHoverState();
    };

    return () => {
      document.removeEventListener("visibilitychange", resetHoverState);
      window.removeEventListener("focus", resetHoverState);
      window.removeEventListener("popstate", handleRouteChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  // インタラクティブ要素判定ロジックをメモ化
  const isInteractiveElement = useCallback((element: HTMLElement): boolean => {
    const tagName = element.tagName.toLowerCase();
    const interactiveTags = ["a", "button", "input", "select", "textarea"];

    return (
      interactiveTags.includes(tagName) ||
      interactiveTags.some((tag) => element.closest(tag) !== null)
    );
  }, []); // 依存関係なし

  // イベントハンドラーをメモ化
  const handleMouseEnter = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setIsHovering(true);
      }
    },
    [isInteractiveElement]
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setIsHovering(false);
      }
    },
    [isInteractiveElement]
  );

  useEffect(() => {
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return isHovering;
};

// MouseStalkerコンポーネントをReact.memoでラップ
const MouseStalker = memo(() => {
  const { x, y } = useMousePosition();
  const isInteractiveElementHovered = useInteractiveElementHover();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 初回訪問チェック
    const hasVisited = sessionStorage.getItem("mouseStalkerVisited");

    if (hasVisited) {
      // 2回目以降は即座に表示
      setIsVisible(true);
    } else {
      // 初回訪問時のみ5秒遅延
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("mouseStalkerVisited", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  // spring設定オブジェクトをメモ化
  const springConfig = useMemo(
    () => ({
      mass: 1,
      tension: 120,
      friction: 14,
    }),
    []
  ); // 依存関係なし

  // スタイルオブジェクトをメモ化
  const baseStyles = useMemo(
    () => ({
      position: "fixed" as const,
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      backgroundColor: "#ff6b8a",
      pointerEvents: "none" as const,
      zIndex: 10000,
    }),
    []
  ); // 依存関係なし

  const springProps = useSpring({
    to: {
      transform: `translate(${x - 5}px, ${y - 6}px)`,
      opacity: isInteractiveElementHovered ? 0 : isVisible ? 1 : 0,
      scale: isInteractiveElementHovered ? 0.5 : 1,
    },
    config: springConfig,
  });

  return (
    <animated.div
      style={{
        ...baseStyles,
        transform: springProps.transform,
        opacity: springProps.opacity,
        scale: springProps.scale,
      }}
    />
  );
});

// 表示名を設定（デバッグ用）
MouseStalker.displayName = "MouseStalker";

export default MouseStalker;
