"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import Hamburger from "../../elements/Hamburger/Hamburger";
import Gnav from "../Gnav/Gnav";
import { Link } from 'next-view-transitions'
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompactLayout, setIsCompactLayout] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsCompactLayout = window.innerWidth <= 768; // 768px以下ならtrue
      setIsCompactLayout(newIsCompactLayout);

      // ビューポート幅が769px以上になった時、メニューを閉じる
      if (!newIsCompactLayout && isOpen) {
        setIsOpen(false);
      }
    };

    // 初回チェック
    checkScreenSize();

    // リサイズイベントリスナーを追加
    window.addEventListener('resize', checkScreenSize);

    // クリーンアップ関数
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isOpen]);

  const toggleMenu = () => {
    if (isCompactLayout) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 1.5, ease: "easeIn" },
      }}
      className={`sticky top-0 left-0 z-50 w-full h-auto mx-auto select-none md:py-8 py-5 md:px-8 px-5 ${`${styles["header"]}`}`}
    >
      <div className={`flex items-center justify-between ${styles["header__container"]}`}>
        <div className={`font-russo text-xl md:text-3xl font-black ${styles["header__title"]}`}>
          <Link href="/" className={`${styles["header__title-link"]}`} onClick={() => isOpen && toggleMenu()} >
            <span className={`${styles["text-gradient"]}`}>Aoyama</span>
          </Link>
        </div>
        <div className={styles["header__items"]}>
          <Gnav isOpen={isOpen && isCompactLayout} toggleMenu={toggleMenu} />
          <AudioPlayer
            src="/audio/They.mp3"
            size={17}
            color="#fff"
            initialVolume={0.7}
          />
        </div>
        <Hamburger isOpen={isOpen && isCompactLayout} toggleMenu={toggleMenu} />
      </div>
    </motion.header>
  );
};

export default Header;
