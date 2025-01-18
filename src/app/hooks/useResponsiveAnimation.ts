"use client";

import { useState, useEffect, useCallback } from "react";

type AnimationConfig = {
  mobileDelay?: number;
  desktopDelay?: number;
};

const useResponsiveAnimation = ({ mobileDelay = 1.6, desktopDelay = 1.6 }: AnimationConfig = {}) => {
  const MOBILE_BREAKPOINT = 768;

  // 初期状態をサーバー・クライアント共通の値に設定
  const [animationProps, setAnimationProps] = useState({
    initial: { opacity: 0, y: 70 }, // デフォルト値を統一
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: desktopDelay,
        duration: 1,
        ease: "easeInOut",
      },
    },
  });

  // メモ化したgetAnimationProps
  const getAnimationProps = useCallback((width: number) => {
    const isMobile = width < MOBILE_BREAKPOINT;
    const currentDelay = isMobile ? mobileDelay : desktopDelay;
    const currentY = isMobile ? 40 : 70;
    
    return {
      initial: { opacity: 0, y: currentY },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: currentDelay,
          duration: 1,
          ease: "easeInOut",
        },
      },
    };
  }, [mobileDelay, desktopDelay]);

  useEffect(() => {
    // クライアントサイドでのみ実行される
    const updateAnimation = () => {
      const width = window.innerWidth;
      setAnimationProps(getAnimationProps(width));
    };

    // 初期表示時に実行
    updateAnimation();

    // リサイズイベントのリスナーを追加
    window.addEventListener("resize", updateAnimation);

    return () => window.removeEventListener("resize", updateAnimation);
  }, [getAnimationProps]);

  return { animationProps };
};

export default useResponsiveAnimation;