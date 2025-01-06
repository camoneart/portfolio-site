"use client";

import React from "react";
import styles from "./TitleAnimation.module.css";
import { motion } from "motion/react"

const TitleAnimation = ({ title, subTitle }: { title: string, subTitle: string }) => {
  return (
    <motion.hgroup
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 12, delay: 1.4, duration: 1, ease: "easeInOut" },
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

export default TitleAnimation;
