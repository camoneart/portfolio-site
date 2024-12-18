"use client";

import React, { useEffect } from "react";
import styles from "./Hamburger.module.css";
import { usePathname } from "next/navigation";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        className={`${styles["hamburger"]} ${
          isOpen ? styles["hamburger--open"] : ""
        }`}
        onClick={toggleMenu}
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
      </button>
    </>
  );
};

export default Hamburger;
