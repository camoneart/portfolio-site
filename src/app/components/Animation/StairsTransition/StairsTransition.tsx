"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./StairsTransition.module.css";

const StairsTransition = ({ children }: { children: React.ReactNode }) => {
  const anim = (
    variants: {
      initial: { top: number };
      enter: (i: number) => {
        top: string;
        transition: {
          duration: number;
          delay: number;
        };
        transitionEnd?: {
          top: number;
          height: number;
        };
      };
      exit: (i: number) => {
        height: string;
        transition: {
          duration: number;
          delay: number;
        };
      };
    },
    custom: number
  ) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  // カラム（transition-column）のアニメーション
  const expand = {
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
  const overlay = {
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

  // カラム数
  const numOfColumns = 5;

  return (
    <div className={`${styles["stairs-transition"]} ${styles["page"]}`}>
      <AnimatePresence mode="wait">
        <motion.div key="overlay" {...anim(overlay, numOfColumns)} className={styles["stairs-transition-bg"]} />
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
