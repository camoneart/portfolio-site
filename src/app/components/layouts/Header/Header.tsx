"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import Hamburger from "../../elements/Hamburger/Hamburger";
import Gnav from "../Gnav/Gnav";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompactLayout, setIsCompactLayout] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsCompactLayout = window.innerWidth < 768; // 768px未満ならtrue
      setIsCompactLayout(newIsCompactLayout); // isCompactLayoutを更新

      // ビューポート幅が768px以上になった時、メニューを閉じる
      if (!newIsCompactLayout && isOpen) {
        setIsOpen(false);
      }
    };

    // 初回チェック
    checkScreenSize();

    // リサイズイベントリスナーを追加
    window.addEventListener("resize", checkScreenSize);

    // クリーンアップ関数
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isOpen]);

  const toggleMenu = () => {
    if (isCompactLayout) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header
      className={`w-full h-auto mx-auto select-none md:py-8 py-4 md:px-8 px-4 ${`${styles["header"]}`}`}
    >
      <div
        className={`flex items-center justify-between ${styles["header__container"]}`}
      >
        <div
          className={`sticky inset-0 font-russo text-xl md:text-3xl font-black ${styles["header__title"]}`}
        >
          <Link
            href="/"
            className={`${styles["header__title-link"]}`}
            onClick={() => isOpen && toggleMenu()}
          >
            <span
              className={`${styles["text-gradient"]} ${styles["rotate-text01"]}`}
            >
              aoyama
            </span>
            <span
              className={`${styles["text-gradient"]} ${styles["rotate-text02"]}`}
            >
              aoyama
            </span>
          </Link>
        </div>
        <div className={styles["header__items"]}>
          <Gnav isOpen={isOpen && isCompactLayout} toggleMenu={toggleMenu} />
          <AudioPlayer
            src="/audio/They.mp3"
            width={17}
            height={17}
            color="#fff"
            initialVolume={0.7}
          />
        </div>
        <Hamburger isOpen={isOpen && isCompactLayout} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}
