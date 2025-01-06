"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import styles from "./StairsTransition.module.css";

// アニメーションの遷移プロパティの型定義
interface TransitionProps {
  duration: number;
  delay: number;
  times?: number[];
  ease?: number[];
}

// バリアントの型定義
interface AnimationVariants extends Variants {
  initial: { [key: string]: any };
  enter: ((custom: any) => { [key: string]: any });
  exit: ((custom: any) => { [key: string]: any });
  [key: string]: any;  // インデックスシグネチャを追加
}

// anim 関数の戻り値の型を定義
interface AnimProps {
  initial: string;
  animate: string;
  exit: string;
  variants: AnimationVariants;
  custom: number;
}

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

  const anim = (variants: AnimationVariants, custom: number): AnimProps  => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  // カラム（transition-column）のアニメーション
  const expand: AnimationVariants = {
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
  const overlay: AnimationVariants = {
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
