"use client";

import { useState, useEffect, useCallback } from "react";

type AnimationConfig = {
  mobileDelay?: number;
  desktopDelay?: number;
};

const useResponsiveAnimation = ({ mobileDelay = 1.6, desktopDelay = 1.6 }: AnimationConfig = {}) => {
  const MOBILE_BREAKPOINT = 767;
  const DEFAULT_WIDTH = MOBILE_BREAKPOINT + 1;

  // メモ化
  const getAnimationProps = useCallback((width: number) => {
    const isMobile = width < MOBILE_BREAKPOINT;
    return {
      initial: { opacity: 0, y: isMobile ? 40 : 70 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: isMobile ? mobileDelay : desktopDelay,
          duration: 1,
          ease: "easeInOut",
        },
      },
    };
  }, [mobileDelay, desktopDelay]);

  const [animationProps, setAnimationProps] = useState(() => {
    return getAnimationProps(typeof window !== 'undefined' ? window.innerWidth : DEFAULT_WIDTH);
  });

  useEffect(() => {
    const updateAnimation = () => {
      setAnimationProps(getAnimationProps(window.innerWidth));
    };

    // 初期表示時に実行
    updateAnimation();

    // リサイズイベントのリスナーを追加
    window.addEventListener("resize", updateAnimation);

    // クリーンアップ
    return () => window.removeEventListener("resize", updateAnimation);
  }, [getAnimationProps]);

  return { animationProps };
};

export default useResponsiveAnimation;