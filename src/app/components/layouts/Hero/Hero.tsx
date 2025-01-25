"use client";

import React, { memo, useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { motion } from "motion/react";

const HERO_TITLE = "Aoyama";
const HERO_SUBTITLE = "Creative Web Engineer";

// アニメーションのdelay時間を定数として管理
const ANIMATION_DELAY = {
  // 初回アクセス時
  INITIAL: {
    TITLE: 3.4,
    SUBTITLE: 4.6
  },
  // 2回目以降のアクセス時
  SUBSEQUENT: {
    TITLE: 1.2,
    SUBTITLE: 2.4
  }
} as const;

// アニメーションのdurationを定数として管理
const ANIMATION_DURATION = {
  // 初回アクセス時
  INITIAL: {
    TITLE: 1.2,
    SUBTITLE: 1.2
  },
  // 2回目以降のアクセス時
  SUBSEQUENT: {
    TITLE: 1.2,
    SUBTITLE: 1.2
  }
} as const;

const Hero = memo(() => {
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem("hasVisitedHero");
    }
    return true;
  });

  useEffect(() => {
    if (!sessionStorage.getItem("hasVisitedHero")) {
      sessionStorage.setItem("hasVisitedHero", "true");
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, ANIMATION_DELAY.INITIAL.SUBTITLE * 1000 + 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className={`font-russo ${styles["hero"]}`}>
      <div className={`flex flex-col items-center justify-end ${styles["hero__container"]}`}>
        <hgroup
          className={`z-20 text-center flex flex-col gap-1 md:gap-3 select-none ${styles["hero__hgroup"]}`}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: isLoading
                  ? ANIMATION_DELAY.INITIAL.TITLE
                  : ANIMATION_DELAY.SUBSEQUENT.TITLE,
                duration: isLoading
                  ? ANIMATION_DURATION.INITIAL.TITLE
                  : ANIMATION_DURATION.SUBSEQUENT.TITLE,
                ease: "easeOut",
              },
            }}
            className={`z-20 md:tracking-wide font-black ${styles["hero__title"]}`}
          >
            <span className={`${styles["text-gradient"]}`}>{HERO_TITLE}</span>
          </motion.h1>
          <motion.p
            className={`z-20 text-xl md:text-2xl md:tracking-wider font-black ${styles["hero__description"]}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: isLoading
                  ? ANIMATION_DELAY.INITIAL.SUBTITLE
                  : ANIMATION_DELAY.SUBSEQUENT.SUBTITLE,
                duration: isLoading
                  ? ANIMATION_DURATION.INITIAL.SUBTITLE
                  : ANIMATION_DURATION.SUBSEQUENT.SUBTITLE,
                ease: "easeOut",
              },
            }}
          >
            {HERO_SUBTITLE}
          </motion.p>
        </hgroup>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
