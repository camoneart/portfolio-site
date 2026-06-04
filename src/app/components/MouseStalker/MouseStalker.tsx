"use client";

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useClientSnapshot } from "@/lib/useClientSnapshot";

type Point = { x: number; y: number };

// SSR/hydration では原点に固定し、ハイドレーション後にウィンドウ中央へ。
const SERVER_POINT: Point = { x: 0, y: 0 };

// useSyncExternalStore のキャッシュ契約を満たすため、値が変わらない限り同一参照を返す。
let cachedCenter: Point = SERVER_POINT;
const getWindowCenter = (): Point => {
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;
  if (cachedCenter.x !== x || cachedCenter.y !== y) {
    cachedCenter = { x, y };
  }
  return cachedCenter;
};

// カスタムフックのメモ化
const useMousePosition = (): Point => {
  // null = まだ実際のマウス位置を受け取っていない（中央表示にフォールバック）
  const [position, setPosition] = useState<Point | null>(null);

  // mousemoveハンドラーをメモ化
  const updatePosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [updatePosition]); // updatePosition は useCallback でメモ化されているので依存配列に含めても問題ない

  const center = useClientSnapshot(getWindowCenter, SERVER_POINT);
  return position ?? center;
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
      // React 19では同期的な状態更新が禁止されているため遅延実行
      setTimeout(resetHoverState, 0);
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(history, args);
      // React 19では同期的な状態更新が禁止されているため遅延実行
      setTimeout(resetHoverState, 0);
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
  // 2回目以降の訪問はハイドレーション後に即 true（即座に表示）
  const visitedBefore = useClientSnapshot(
    () => sessionStorage.getItem("mouseStalkerVisited") !== null,
    false
  );
  const [delayElapsed, setDelayElapsed] = useState(false);
  const isVisible = visitedBefore || delayElapsed;

  useEffect(() => {
    // 初回訪問時のみ5秒遅延してから表示
    if (visitedBefore) return;

    const timer = setTimeout(() => {
      setDelayElapsed(true);
      sessionStorage.setItem("mouseStalkerVisited", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, [visitedBefore]);

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

MouseStalker.displayName = "MouseStalker";

export default MouseStalker;
