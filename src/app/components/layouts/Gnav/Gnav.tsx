import React from "react";
import Link from "next/link";
import styles from "./Gnav.module.css";
import { motion } from "motion/react";

interface GnavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Gnav = ({ isOpen, toggleMenu }: GnavProps) => {
  return (
    <nav
      className={`font-russo ${styles["gnav"]} ${
        isOpen ? styles["gnav--open"] : ""
      }`}
    >
      <ul
        className={`font-black ${styles["gnav__list"]} ${
          isOpen ? styles["gnav__list--open"] : ""
        }`}
      >
        <motion.li
          initial={{ opacity: 0, y: 70 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 1.7, duration: 1, ease: "easeInOut" },
          }}
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          <Link
            className={`${styles["gnav__link"]} ${styles["hover-un"]} ${
              isOpen ? styles["gnav__link--open"] : ""
            }`}
            href="/about"
            onClick={toggleMenu}
          >
            About
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 70 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 1.9, duration: 1, ease: "easeInOut" },
          }}
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          <Link
            className={`${styles["gnav__link"]} ${styles["hover-un"]} ${
              isOpen ? styles["gnav__link--open"] : ""
            }`}
            href="/skills"
            onClick={toggleMenu}
          >
            Skills
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 70 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 2.1, duration: 1, ease: "easeInOut" },
          }}
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          <Link
            className={`${styles["gnav__link"]} ${styles["hover-un"]} ${
              isOpen ? styles["gnav__link--open"] : ""
            }`}
            href="/works"
            onClick={toggleMenu}
          >
            Works
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 70 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 2.3, duration: 1, ease: "easeInOut" },
          }}
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          <Link
            className={`${styles["gnav__link"]} ${styles["hover-un"]} ${
              isOpen ? styles["gnav__link--open"] : ""
            }`}
            href="/contact"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Gnav;
