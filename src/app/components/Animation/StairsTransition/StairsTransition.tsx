"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import styles from "./StairsTransition.module.css";

// アニメーションの遷移プロパティの型定義
type CustomTransition = {
  duration: number;
  delay: number;
  times?: number[];
  ease?: number[];
};

interface AnimProps {
  initial: string;
  animate: string;
  exit: string;
  variants: Variants;
  custom: number;
}

// バリアントの型定義
type ExpandVariants = {
  initial: {
    top: number;
    height: string;
    bottom: string;
  };
  enter: (i: number) => {
    top: (number | string)[];
    height: string[];
    bottom: string[];
    transition: CustomTransition;
  };
  exit: (i: number) => {
    height: string;
    transition: CustomTransition;
  };
};

type OverlayVariants = {
  initial: {
    opacity: number;
  };
  enter: (i: number) => {
    opacity: number;
    transition: CustomTransition;
  };
  exit: (i: number) => {
    opacity: number;
    transition: CustomTransition;
  };
};

const StairsTransition = ({ children }: { children: React.ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

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

  const anim = (variants: Variants, custom: number): AnimProps => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  // カラム（transition-column）のアニメーション
  const expand: ExpandVariants = {
    initial: {
      top: 0,
      height: "0%",
      bottom: "auto"
    },
    enter: (i: number) => ({
      top: [0, 0, 0, "100%"],
      height: ["0%", "100%", "100%", "0%"],
      bottom: ["auto", "auto", "auto", "auto"],
      transition: {
        duration: 1.3,
        delay: 0.07 * i,
        times: [0, 0.2, 0.6, 1],
        ease: [0.645, 0.045, 0.355, 1.0]
      }
    }),
    exit: (i: number) => ({
      height: "0%",
      transition: {
        duration: 0.6,
        delay: 0.07 * i,
        ease: [0.645, 0.045, 0.355, 1.0]
      }
    })
  };

  // 背景（transition-bg）のアニメーション
  const overlay: OverlayVariants = {
    initial: {
      opacity: 1
    },
    enter: (i: number) => ({
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.8 + (0.07 * i),
      }
    }),
    exit: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.07 * i
      }
    })
  };

  // アニメーション開始時
  const onAnimationStart = () => {
    setIsAnimating(true);
  }

  // アニメーション終了時
  const onAnimationComplete = () => {
    setIsAnimating(false);
  }

  // カラム数
  const numOfColumns = 5;

  return (
    <div className={`${styles["stairs-transition"]} ${styles["page"]} ${isAnimating ? styles["no-scroll"] : ""}`}>
      <AnimatePresence mode="wait">
        <motion.div 
          key="overlay" 
          {...anim(overlay, numOfColumns)} 
          className={styles["stairs-transition-bg"]}
          onAnimationStart={onAnimationStart}
          onAnimationComplete={onAnimationComplete}
        />
      </AnimatePresence>
      <div className={styles["stairs-transition-container"]}>
        <AnimatePresence mode="wait">
          {[...Array(numOfColumns)].map((_, i) => (
            <motion.div {...anim(expand, numOfColumns - i)} key={`stair-${i}`} className={styles["stairs-transition-column"]} />
          ))}
        </AnimatePresence>
      </div>
      {children}
    </div>
  );
};

export default StairsTransition;
