import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Gnav.module.css";
import { Route } from "next";

interface GnavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Gnav = ({ isOpen, toggleMenu }: GnavProps) => {
  const pathname = usePathname();

  // リンクコンポーネントを条件付きでレンダリングする関数
  const renderNavItem = (path: Route, label: string) => {
    const isActive = pathname === path;
    const commonClasses = `${styles["gnav__link"]} ${styles["hover-un"]} ${
      isOpen ? styles["gnav__link--open"] : ""
    } ${isActive ? styles["active"] : ""}`;

    return isActive ? (
      <span className={commonClasses}>{label}</span>
    ) : (
      <Link className={commonClasses} href={path} onClick={toggleMenu}>
        {label}
      </Link>
    );
  };

  return (
    <nav className={`font-russo ${styles["gnav"]} ${isOpen ? styles["gnav--open"] : ""}`}>
      <ul
        className={`font-black ${styles["gnav__list"]} ${isOpen ? styles["gnav__list--open"] : ""}`}
      >
        <li
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          {renderNavItem("/about" as Route, "About")}
        </li>
        <li
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          {renderNavItem("/skills" as Route, "Skills")}
        </li>
        <li
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          {renderNavItem("/works" as Route, "Works")}
        </li>
        <li
          className={`md:sticky md:inset-0 ${styles["gnav__item"]} ${
            isOpen ? styles["gnav__item--open"] : ""
          }`}
        >
          {renderNavItem("/contact" as Route, "Contact")}
        </li>
      </ul>
    </nav>
  );
};

export default Gnav;
