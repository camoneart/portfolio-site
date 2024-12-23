"use client";

import React from "react";
import { motion } from "motion/react"
import styles from "./AnimationTitle.module.css";

const AnimationTitle = ({ title, subTitle }: { title: string, subTitle: string }) => {
  return (
    <motion.hgroup
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 1.5, ease: "easeIn" },
      }}
      className={`flex flex-col items-center justify-center gap-2 select-none ${styles["title-group"]}`}
    >
      <h1 className={`font-russo order-2 font-black ${styles["title"]} ${styles["motion-title"]}`}>
        {title}
      </h1>
      <p className={`order-1 font-black ${styles["sub-title"]}`}>{subTitle}</p>
    </motion.hgroup>
  );
};

export default AnimationTitle;
  