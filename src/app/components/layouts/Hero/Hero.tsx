import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={`p-4 flex flex-col items-center ${styles["hero__container"]}`}>
        <hgroup className={`text-center flex flex-col gap-4 ${styles["hero__hgroup"]}`}>
          <h1 className={`text-5xl sm:text-7xl font-black ${styles["hero__title"]}`}>
            Blue <span className={styles["text-gradient"]}>Walker</span>
          </h1>
          <p className={`text-xl sm:text-2xl font-black ${styles["hero__description"]}`}>
            Creative Web Developer
          </p>
        </hgroup>
      </div>
    </section>
  );
};

export default Hero;
