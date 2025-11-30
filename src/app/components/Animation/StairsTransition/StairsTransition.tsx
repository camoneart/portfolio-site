"use client";

import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import styles from "./StairsTransition.module.css";

// 定数をオブジェクトにまとめて最適化
const ANIMATION_CONFIG = {
  COLUMNS: 5,
  DURATION: 1.3,
  DELAY_MULTIPLIER: 0.07,
  EASE: [0.645, 0.045, 0.355, 1.0],
} as const;

// バリアントの最適化
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
      duration: ANIMATION_CONFIG.DURATION,
      delay: ANIMATION_CONFIG.DELAY_MULTIPLIER * i,
      times: [0, 0.2, 0.6, 1],
      ease: ANIMATION_CONFIG.EASE,
    },
  }),
  exit: (i: number) => ({
    height: "0%",
    transition: {
      duration: 0.6,
      delay: ANIMATION_CONFIG.DELAY_MULTIPLIER * i,
      ease: ANIMATION_CONFIG.EASE,
    },
  }),
};

const overlayVariants: Variants = {
  initial: { opacity: 1 },
  enter: (i: number) => ({
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.8 + ANIMATION_CONFIG.DELAY_MULTIPLIER * i,
    },
  }),
  exit: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: ANIMATION_CONFIG.DELAY_MULTIPLIER * i,
    },
  }),
};

// 階段カラムコンポーネントを分離
const StairColumn = memo(({ custom }: { custom: number }) => (
  <motion.div
    key={`stair-${custom}`}
    initial="initial"
    animate="enter"
    exit="exit"
    variants={expandVariants}
    custom={custom}
    className={styles["stairs-transition-column"]}
  />
));

// デバッグ用のdisplayName設定
StairColumn.displayName = "StairColumn";

const StairsTransitionContent = memo(({ children }: { children: React.ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationStart = useCallback(() => setIsAnimating(true), []);
  const handleAnimationComplete = useCallback(() => setIsAnimating(false), []);

  const overlayAnimProps = useMemo(
    () => ({
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants: overlayVariants,
      custom: ANIMATION_CONFIG.COLUMNS,
    }),
    []
  );

  useEffect(() => {
    document.body.style.overflow = isAnimating ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isAnimating]);

  const columns = useMemo(
    () => Array.from({ length: ANIMATION_CONFIG.COLUMNS }, (_, i) => ANIMATION_CONFIG.COLUMNS - i),
    []
  );

  return (
    <div
      className={`${styles["stairs-transition"]} ${styles["page"]} ${isAnimating ? styles["no-scroll"] : ""}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="overlay"
          {...overlayAnimProps}
          className={styles["stairs-transition-bg"]}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        />
      </AnimatePresence>
      <div className={styles["stairs-transition-container"]}>
        <AnimatePresence mode="wait">
          {columns.map((custom) => (
            <StairColumn key={`stair-${custom}`} custom={custom} />
          ))}
        </AnimatePresence>
      </div>
      {children}
    </div>
  );
});

const StairsTransition = memo(({ children }: { children: React.ReactNode }) => (
  <StairsTransitionContent>{children}</StairsTransitionContent>
));

// デバッグ用のdisplayName設定
StairsTransitionContent.displayName = "StairsTransitionContent";
StairsTransition.displayName = "StairsTransition";

export default StairsTransition;
