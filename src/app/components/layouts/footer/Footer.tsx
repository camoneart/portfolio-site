import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`font-russo select-none ${styles["footer"]}`}>
      <div className={`p-4 grid place-items-center ${styles["footer__container"]}`}>
        <p className={`z-20 ${styles["footer__text"]}`}>
          <small className={`text-xs font-bold ${styles["footer__copyright"]}`}>
            <span className={`${styles["text-gradient"]}`}>&copy; 2024 Aoyama</span>
          </small>
        </p>
      </div>
    </footer>
  )
};

export default Footer;
