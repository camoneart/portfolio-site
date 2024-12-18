import React from "react";
import Link from "next/link";
import styles from "./Gnav.module.css";

interface GnavProps {
  isOpen: boolean,
  toggleMenu: () => void;
}

const Gnav = ({ isOpen, toggleMenu }: GnavProps) => {
  return (
    <nav className={`${styles["gnav"]} ${isOpen ? styles["gnav--open"] : ""}`}>
      <ul className={`font-black ${styles["gnav__list"]} ${isOpen ? styles["gnav__list--open"] : ""}`}>
        <li className={`${styles["gnav__item"]} ${isOpen ? styles["gnav__item--open"] : ""}`}>
          <Link className={`${styles["gnav__link"]} ${isOpen ? styles["gnav__link--open"] : ""}`} href="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li className={`${styles["gnav__item"]} ${isOpen ? styles["gnav__item--open"] : ""}`}>
          <Link className={`${styles["gnav__link"]} ${isOpen ? styles["gnav__link--open"] : ""}`} href="/skills" onClick={toggleMenu}>Skills</Link>
        </li>
        <li className={`${styles["gnav__item"]} ${isOpen ? styles["gnav__item--open"] : ""}`}>
          <Link className={`${styles["gnav__link"]} ${isOpen ? styles["gnav__link--open"] : ""}`} href="/works" onClick={toggleMenu}>Works</Link>
        </li>
        <li className={`${styles["gnav__item"]} ${isOpen ? styles["gnav__item--open"] : ""}`}>
          <Link className={`${styles["gnav__link"]} ${isOpen ? styles["gnav__link--open"] : ""}`} href="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnav;
