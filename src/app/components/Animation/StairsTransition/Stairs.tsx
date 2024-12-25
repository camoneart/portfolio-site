"use client"

import React from 'react'
import { motion, AnimatePresence } from "motion/react"
import styles from './Stairs.module.css'

const Stairs = ({
  children,
  mode = "wait"
}: {
  children: React.ReactNode;
  mode: "wait" | "sync" | "popLayout";
}) => {

  const anim = (variants: {
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
  }, custom: number) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom
    }
  }

  const expand = {
    initial: {
      top: 0
    },
    enter: (i: number) => ({
      top: "100%",
      transition: {
        duration: 0.5,
        delay: 0.06 * i
      },
      transitionEnd: {
        top: 0,
        height: 0
      }
    }),
    exit: (i: number) => ({
      height: "100%",
      transition: {
        duration: 0.5,
        delay: 0.06 * i
      },
    })
  }

  const overlay = {
    initial: {
      opacity: 0.5
    },
    enter: {
      opacity: 0
    },
    exit: {
      opacity: 0.5
    }
  }

  const numOfColumns = 5;

  return (
    <AnimatePresence mode={mode}>
      <div className={`${styles["stairs"]} ${styles["page"]}`}>
        <motion.div {...anim(overlay)} className={styles["transition-bg"]}></motion.div>
        <div className={styles["transition-container"]}>
          {
            [...Array(numOfColumns)].map((_, i) => {
              return (
                <motion.div {...anim(expand, numOfColumns - i)} key={`stair-${i}`} className={styles["transition-column"]}></motion.div>
              )
            })
          }
        </div>
        {children}
      </div>
    </AnimatePresence>
  )
}

export default Stairs;