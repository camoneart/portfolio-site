"use client";

import React from "react";
import { motion } from "motion/react"
import styles from "./AnimationTitle.module.css";

const AnimationTitle = ({ title, subTitle }: { title: string, subTitle: string }) => {
  return (
    <hgroup
      className={`flex flex-col items-center justify-center gap-2 select-none ${styles["title-group"]}`}
    >
      <motion.h1
        // initial={{ opacity: 0, y: 50 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.15,
          // y: 0,
          // transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.2, duration: 1, ease: "easeInOut" },
          transition: { delay: 0.2, duration: 1, ease: "easeInOut" },
        }}
        className={`font-russo order-2 font-black ${styles["title"]} ${styles["motion-title"]}`}>
        {title}
      </motion.h1>
      <motion.p
        // initial={{ opacity: 0, y: 60 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          // y: 0,
          // transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.25, duration: 1.4, ease: "easeInOut" },
          transition: { delay: 0.3, duration: 1, ease: "easeInOut" },
        }}
        className={`order-1 font-black ${styles["sub-title"]}`}>
        {subTitle}
      </motion.p>
    </hgroup>
  );
};

export default AnimationTitle;
