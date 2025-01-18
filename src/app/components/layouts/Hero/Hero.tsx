"use client";

import React from "react";
import styles from "./Hero.module.css";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className={`font-russo ${styles["hero"]}`}>
      <div className={`pt-6 pb-12 flex flex-col items-center justify-end ${styles["hero__container"]}`}>
        <motion.hgroup
          initial={{ y: 200 }}
          animate={{
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 1.4, duration: 1, ease: "easeInOut" },
          }}
          className={`text-center flex flex-col gap-1 md:gap-3 select-none ${styles["hero__hgroup"]}`}>
          <h1 className={`z-20 md:tracking-wide font-black ${styles["hero__title"]}`}>
            <span className={`${styles["text-gradient"]}`}>Aoyama</span>
          </h1>
          <p className={`z-20 text-xl md:text-2xl md:tracking-wider font-black ${styles["hero__description"]}`}>
            Creative Web Engineer
          </p>
        </motion.hgroup>
      </div>
    </section>
  );
};

export default Hero;
