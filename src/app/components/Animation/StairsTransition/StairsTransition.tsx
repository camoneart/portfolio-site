"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import styles from "./StairsTransition.module.css";

// 定数定義
const NUM_OF_COLUMNS = 5;
const ANIMATION_DURATION = 1.3;
const ANIMATION_DELAY_MULTIPLIER = 0.07;
const ANIMATION_EASE = [0.645, 0.045, 0.355, 1.0];

interface AnimProps {
  initial: string;
  animate: string;
  exit: string;
  variants: Variants;
  custom: number;
}

// バリアントの定義をメモ化
const expandVariants: Variants = {
  initial: {
    top: 0,
    height: "0%",
    bottom: "unset",
  },
  enter: (i: number) => ({
    top: ["0%", "0%", "0%", "100%"],
    height: ["0%", "100%", "100%", "0%"],
    bottom: ["unset", "unset", "0%", "0%"],
    transition: {
      duration: ANIMATION_DURATION,
      delay: ANIMATION_DELAY_MULTIPLIER * i,
      times: [0, 0.2, 0.6, 1],
      ease: ANIMATION_EASE,
    },
  }),
  exit: (i: number) => ({
    height: "0%",
    transition: {
      duration: 0.6,
      delay: ANIMATION_DELAY_MULTIPLIER * i,
      ease: ANIMATION_EASE,
    },
  }),
};

const overlayVariants: Variants = {
  initial: {
    opacity: 1,
  },
  enter: (i: number) => ({
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.8 + ANIMATION_DELAY_MULTIPLIER * i,
    },
  }),
  exit: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: ANIMATION_DELAY_MULTIPLIER * i,
    },
  }),
};

// アニメーションプロップス生成関数をメモ化
const createAnimProps = (variants: Variants, custom: number): AnimProps => ({
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants,
  custom,
});

const StairsTransitionContent = memo(({ children }: { children: React.ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // アニメーションハンドラーをメモ化
  const handleAnimationStart = useCallback(() => {
    setIsAnimating(true);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setIsAnimating(false);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isAnimating]);

  return (
    <div className={`${styles["stairs-transition"]} ${styles["page"]} ${isAnimating ? styles["no-scroll"] : ""}`}>
      <AnimatePresence mode="wait">
        <motion.div 
          key="overlay" 
          {...createAnimProps(overlayVariants, NUM_OF_COLUMNS)} 
          className={styles["stairs-transition-bg"]}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        />
      </AnimatePresence>
      <div className={styles["stairs-transition-container"]}>
        <AnimatePresence mode="wait">
          {Array.from({ length: NUM_OF_COLUMNS }).map((_, i) => (
            <motion.div 
              {...createAnimProps(expandVariants, NUM_OF_COLUMNS - i)} 
              key={`stair-${i}`} 
              className={styles["stairs-transition-column"]} 
            />
          ))}
        </AnimatePresence>
      </div>
      {children}
    </div>
  );
});

const StairsTransition = memo(({ children }: { children: React.ReactNode }) => {
  return <StairsTransitionContent>{children}</StairsTransitionContent>;
});

// デバッグ用のdisplayName設定
StairsTransitionContent.displayName = 'StairsTransitionContent';
StairsTransition.displayName = 'StairsTransition';

export default StairsTransition;
