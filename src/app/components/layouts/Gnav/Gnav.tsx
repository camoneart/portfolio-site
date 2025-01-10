import React from "react";
import { Link } from "next-view-transitions";
import type { Route } from 'next';
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
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 1.8, duration: 1, ease: "easeInOut" },
          }}
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          <Link
            className={`${styles["gnav__link"]} ${styles["hover-un"]} ${
              isOpen ? styles["gnav__link--open"] : ""
            }`}
            href={"/about" as Route}
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
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 2, duration: 1, ease: "easeInOut" },
          }}
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          <Link
            className={`${styles["gnav__link"]} ${styles["hover-un"]} ${
              isOpen ? styles["gnav__link--open"] : ""
            }`}
            href={"/skills" as Route}
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
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 2.2, duration: 1, ease: "easeInOut" },
          }}
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          <Link
            className={`${styles["gnav__link"]} ${styles["hover-un"]} ${
              isOpen ? styles["gnav__link--open"] : ""
            }`}
            href={"/works" as Route}
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
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 2.4, duration: 1, ease: "easeInOut" },
          }}
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          <Link
            className={`${styles["gnav__link"]} ${styles["hover-un"]} ${
              isOpen ? styles["gnav__link--open"] : ""
            }`}
            href={"/contact" as Route}
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
