import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={`p-4 grid place-items-center ${styles["footer__container"]}`}>
        <p className={styles["footer__text"]}>
          <small className={`text-xs font-bold ${styles["footer__copyright"]}`}>&copy; 2024 blue walker</small>
        </p>
      </div>
    </footer>
  )
};

export default Footer;
