import React from "react";
import styles from "./Header.module.css";
import Navigation from "../navigation/Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`font-russo w-full mx-auto max-w-screen-2xl select-none ${`w-full h-auto py-8 px-6 ${styles["header"]}`}`}>
      <div className={`flex items-center justify-between ${styles["header__container"]}`}>
        <div className={`z-20 text-2xl font-black ${styles["header__title"]}`}>
          <Link href="/">
            <span className={`${styles["text-gradient"]}`}>Aoyama</span>
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
