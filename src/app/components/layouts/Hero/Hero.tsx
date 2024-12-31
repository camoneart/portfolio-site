"use client";

import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`font-russo h-full grid  ${styles["hero"]}`}>
      <div className={`pt-6 pb-12 flex flex-col items-center justify-end ${styles["hero__container"]}`}>
        <hgroup className={`text-center flex flex-col gap-1 md:gap-3 select-none ${styles["hero__hgroup"]}`}>
          <h1 className={`z-20 tracking-wide font-black ${styles["hero__title"]}`}>
            <span className={`${styles["text-gradient"]}`}>Aoyama</span>
          </h1>
          <p className={`z-20 text-xl md:text-2xl tracking-wider font-black ${styles["hero__description"]}`}>
            Creative Web Engineer
          </p>
        </hgroup>
      </div>
    </section>
  );
};

export default Hero;
