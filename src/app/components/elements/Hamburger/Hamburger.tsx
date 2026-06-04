"use client";

import React, { useEffect, useState } from "react";
import { useClientSnapshot } from "@/lib/useClientSnapshot";
import styles from "./Hamburger.module.css";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
  // false on the server and during hydration, true once mounted on the client.
  const isMounted = useClientSnapshot(() => true, false);
  const [wasOpen, setWasOpen] = useState(false);

  // Adjust state during render instead of in an effect (React: "You Might Not
  // Need an Effect"). Once the menu has opened, wasOpen stays sticky.
  if (isOpen && !wasOpen) {
    setWasOpen(true);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <button
      type="button"
      className={`${styles["hamburger"]} ${isOpen ? styles["hamburger--open"] : ""}`}
      onClick={toggleMenu}
      data-mounted={isMounted}
      data-was-open={wasOpen}
    >
      <div className={styles["hamburger__box"]}>
        <div
          className={`${styles["hamburger__line"]} ${styles["hamburger__line-top"]} ${
            isOpen ? styles["hamburger__line--open"] : styles["hamburger__line--close"]
          }`}
        ></div>
        <div
          className={`${styles["hamburger__line"]} ${styles["hamburger__line-middle"]} ${
            isOpen ? styles["hamburger__line--open"] : styles["hamburger__line--close"]
          }`}
        ></div>
        <div
          className={`${styles["hamburger__line"]} ${styles["hamburger__line-bottom"]} ${
            isOpen ? styles["hamburger__line--open"] : styles["hamburger__line--close"]
          }`}
        ></div>
      </div>
    </button>
  );
};

export default Hamburger;
