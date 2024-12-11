"use client";

import React from "react";
import styles from "./Header.module.css";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import Gnav from "../Gnav/Gnav";
import { Link } from 'next-view-transitions'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 1.5, ease: "easeIn" },
      }}
      className={`sticky top-0 left-0 z-50 w-full mx-auto max-w-screen-xxl select-none ${`w-full h-auto py-8 px-6 ${styles["header"]}`}`}
    >
      <div className={`flex items-center justify-between ${styles["header__container"]}`}>
        <div className={`text-2xl font-black ${styles["header__title"]}`}>
          <Link href="/">
            <span className={`${styles["text-gradient"]}`}>Aoyama</span>
          </Link>
        </div>
        <div className={styles["header__items"]}>
          <Gnav />
          <AudioPlayer
            src="/audio/They.mp3"
            size={17}
            color="#fff"
            initialVolume={0.7}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
