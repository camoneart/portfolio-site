"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

type AnimationConfig = {
  mobileDelay?: number;
  desktopDelay?: number;
};

type AnimationProps = {
  initial: { opacity: number; y: number };
  animate: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness: number;
      damping: number;
      delay: number;
      duration: number;
      ease: string;
    };
  };
};

const MOBILE_BREAKPOINT = 768;

const useResponsiveAnimation = ({
  mobileDelay = 1.6,
  desktopDelay = 1.6,
}: AnimationConfig = {}) => {
  // 初期状態をメモ化
  const initialAnimationState = useMemo<AnimationProps>(
    () => ({
      initial: { opacity: 0, y: 70 },
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
    }),
    [desktopDelay]
  );

  const [animationProps, setAnimationProps] = useState<AnimationProps>(
    initialAnimationState
  );

  // アニメーションプロパティの生成をメモ化
  const getAnimationProps = useCallback(
    (width: number): AnimationProps => {
      const isMobile = width < MOBILE_BREAKPOINT;
      return {
        initial: {
          opacity: 0,
          y: isMobile ? 40 : 70,
        },
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
    },
    [mobileDelay, desktopDelay]
  );

  // リサイズハンドラーをメモ化
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setAnimationProps(getAnimationProps(width));
  }, [getAnimationProps]);

  useEffect(() => {
    // 初期設定
    handleResize();

    // デバウンスされたリサイズハンドラー
    let resizeTimer: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [handleResize]);

  return { animationProps };
};

export default useResponsiveAnimation;
