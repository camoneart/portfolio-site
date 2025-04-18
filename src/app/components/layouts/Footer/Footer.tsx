"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`font-russo select-none ${styles["footer"]}`}>
      <div className={`p-5 grid place-items-center ${styles["footer__container"]}`}>
        <p className={`z-20 ${styles["footer__text"]}`}>
          <small className={`text-xs font-bold ${styles["footer__copyright"]}`}>
            <span className={`${styles["text-gradient"]}`}>
              &copy; 2024 - {new Date().getFullYear()} Aoyama
            </span>
          </small>
        </p>
      </div>
    </footer>
  );
};
