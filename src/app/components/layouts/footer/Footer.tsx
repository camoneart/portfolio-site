"use client";

import React from "react";
import styles from "./Footer.module.css";
import { motion } from "motion/react"

const Footer = () => {
  return (
    <footer className={`font-russo select-none ${styles["footer"]}`}>
      <div className={`p-5 grid place-items-center ${styles["footer__container"]}`}>
        <p className={`z-10 ${styles["footer__text"]}`}>
          <small className={`text-xs font-bold ${styles["footer__copyright"]}`}>
            <motion.span initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 1.5, ease: "easeIn" },
      }}className={`${styles["text-gradient"]}`}>&copy; 2024 Aoyama</motion.span>
          </small>
        </p>
      </div>
    </footer>
  )
};

export default Footer;
