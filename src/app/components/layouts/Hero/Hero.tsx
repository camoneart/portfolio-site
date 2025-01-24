"use client";

import React, { memo } from "react";
import styles from "./Hero.module.css";
import { motion } from "motion/react";

const HERO_TITLE = "Aoyama";
const HERO_SUBTITLE = "Creative Web Engineer";

const Hero = memo(() => {
  return (
    <section className={`font-russo ${styles["hero"]}`}>
      <div className={`pt-6 pb-12 flex flex-col items-center justify-end ${styles["hero__container"]}`}>
        <motion.hgroup
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 3.4,
              duration: 1.2,
              ease: "easeOut"
            },
          }}
          className={`z-20 text-center flex flex-col gap-1 md:gap-3 select-none ${styles["hero__hgroup"]}`}
        >
          <h1 className={`z-20 md:tracking-wide font-black ${styles["hero__title"]}`}>
            <span className={`${styles["text-gradient"]}`}>{HERO_TITLE}</span>
          </h1>
          <p className={`z-20 text-xl md:text-2xl md:tracking-wider font-black ${styles["hero__description"]}`}>
            {HERO_SUBTITLE}
          </p>
        </motion.hgroup>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
