"use client";

import React from "react";
import styles from "./Footer.module.css";
import { motion } from "motion/react";
import useFooterResponsiveAnimation from "@/app/features/footer/hooks/useFooterResponsiveAnimation";

export default function Footer() {
  const { animationProps } = useFooterResponsiveAnimation();

  return (
    <footer className={`font-russo select-none ${styles["footer"]}`}>
      <div
        className={`p-5 grid place-items-center ${styles["footer__container"]}`}
      >
        <motion.p
          {...animationProps}
          className={`z-20 ${styles["footer__text"]}`}>
          <small className={`text-xs font-bold ${styles["footer__copyright"]}`}>
            <span className={`${styles["text-gradient"]}`}>
              &copy; 2024 Aoyama
            </span>
          </small>
        </motion.p>
      </div>
    </footer>
  );
};
