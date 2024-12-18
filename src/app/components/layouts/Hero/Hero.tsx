"use client";

import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 1.5, ease: "easeIn" },
      }}
      className={`h-full grid  ${styles["hero"]}`}
    >
      <div
        className={`pt-6 pb-12 flex flex-col items-center justify-end ${styles["hero__container"]}`}
      >
        <hgroup
          className={`text-center flex flex-col gap-3 sm:gap-6 select-none ${styles["hero__hgroup"]}`}
        >
          <h1
            className={`z-20 text-5xl sm:text-8xl tracking-wide font-black ${styles["hero__title"]}`}
          >
            <span className={`${styles["text-gradient"]}`}>Aoyama</span>
          </h1>
          <p
            className={`z-20 text-xl sm:text-2xl tracking-wider font-black ${styles["hero__description"]}`}
          >
            Creative Web Developer
          </p>
        </hgroup>
      </div>
    </motion.section>
  );
};

export default Hero;
