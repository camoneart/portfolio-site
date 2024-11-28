import React from "react";
import styles from "./Header.module.css";
import Navigation from "../navigation/Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`w-full mx-auto max-w-screen-2xl ${`w-full h-auto py-8 px-6 ${styles["header"]}`}`}>
      <div className={`flex items-center justify-between ${styles["header__container"]}`}>
        <div className={`font-black ${styles["header__title"]}`}>
          <Link href="/">
            Blue <span className={styles["text-gradient"]}>Walker</span>
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
