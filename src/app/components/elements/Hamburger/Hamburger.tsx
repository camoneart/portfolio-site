"use client";

import React, { useEffect, useState } from "react";
import styles from "./Hamburger.module.css";
import { motion } from "motion/react";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setWasOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 12, delay: 1.8, duration: 1, ease: "easeInOut" },
      }}
      type="button"
      className={`${styles["hamburger"]} ${isOpen ? styles["hamburger--open"] : ""}`}
      onClick={toggleMenu}
      data-mounted={isMounted}
      data-was-open={wasOpen}
    >
      <div className={styles["hamburger__box"]}>
        <div
          className={`${styles["hamburger__line"]} ${
            styles["hamburger__line-top"]
          } ${
            isOpen
              ? styles["hamburger__line--open"]
              : styles["hamburger__line--close"]
          }`}
        ></div>
        <div
          className={`${styles["hamburger__line"]} ${
            styles["hamburger__line-middle"]
          } ${
            isOpen
              ? styles["hamburger__line--open"]
              : styles["hamburger__line--close"]
          }`}
        ></div>
        <div
          className={`${styles["hamburger__line"]} ${
            styles["hamburger__line-bottom"]
          } ${
            isOpen
              ? styles["hamburger__line--open"]
              : styles["hamburger__line--close"]
          }`}
        ></div>
      </div>
    </motion.button>
  );
};

export default Hamburger;
