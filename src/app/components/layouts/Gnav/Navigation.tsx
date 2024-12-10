import React from "react";
// import Link from "next/link";
import { Link } from 'next-view-transitions'
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles["gnav"]}>
      <ul className={`flex items-center gap-5 font-black ${styles["gnav__list"]}`}>
        <li className={styles["gnav__item"]}>
          <Link className={styles["gnav__link"]} href="/about">About</Link>
        </li>
        <li className={styles["gnav__item"]}>
          <Link className={styles["gnav__link"]} href="/skills">Skills</Link>
        </li>
        <li className={styles["gnav__item"]}>
          <Link className={styles["gnav__link"]} href="/works">Works</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
