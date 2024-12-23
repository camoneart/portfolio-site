"use client";

import React from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";
import { motion } from "motion/react";

interface BreadcrumbProps {
  title: string;
  maxLength?: number;
  parentPath?: string;
  parentLabel?: string;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  maxLength = 10,
  parentPath,
  parentLabel,
}) => {
  const truncatedTitle = truncateText(title, maxLength);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 1.2, ease: "easeIn" }
      }}
      aria-label="パンくずリスト"
      className={`font-russo ${styles["breadcrumb"]}`}
    >
      <ol className={`${styles["breadcrumb__list"]}`}>
        <li className={styles["breadcrumb__item"]}>
          <Link
            href="/"
            className={`${styles["breadcrumb__link"]} ${styles["hover-un"]}`}
          >
            Home
          </Link>
        </li>
        {parentPath && parentLabel && (
          <li className={styles["breadcrumb__item"]}>
            <Link
              href={parentPath}
              className={`${styles["breadcrumb__link"]} ${styles["hover-un"]}`}
            >
              {parentLabel}
            </Link>
          </li>
        )}
        <li className={styles["breadcrumb__item"]}>
          <span title={title}>{truncatedTitle}</span>
        </li>
      </ol>
    </motion.nav>
  );
};

export default Breadcrumb;
