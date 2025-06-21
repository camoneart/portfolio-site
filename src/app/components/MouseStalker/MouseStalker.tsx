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
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
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
      backgroundColor: "#ff6b4a",
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
