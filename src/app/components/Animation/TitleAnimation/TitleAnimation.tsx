"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./TitleAnimation.module.css";

const TitleAnimation = ({ title, subTitle }: { title: string, subTitle: string }) => {
  return (
    <motion.hgroup
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 1.5, ease: "easeIn" },
      }}
      className="flex flex-col items-center justify-center gap-3 mt-2 mb-12 select-none"
    >
      <h1 className={`order-2 font-black tracking-wider ${styles["title"]} ${styles["motion-title"]}`}>
        {title}
      </h1>
      <p className={`order-1 font-black tracking-wider ${styles["sub-title"]}`}>{subTitle}</p>
    </motion.hgroup>
  );
};

export default TitleAnimation;
