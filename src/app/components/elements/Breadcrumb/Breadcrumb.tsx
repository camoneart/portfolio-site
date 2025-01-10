"use client";

import React from "react";
import { Link } from "next-view-transitions";
import styles from "./Breadcrumb.module.css";
import { motion } from "motion/react";
import { LinkProps } from 'next/link';
import { Route } from 'next';

interface BreadcrumbProps {
  title: string;
  maxLength?: number;
  parentPath?: LinkProps<string>['href'];
  parentLabel?: string;
  isDetail?: boolean;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

// パスから親ページの情報を取得する関数
const getParentInfo = (path: string) => {
  const segments = path.split('/').filter(Boolean);
  const parentSegment = segments[0];
  
  // パスセグメントの最初の文字を大文字に変換
  const capitalizedParent = parentSegment.charAt(0).toUpperCase() + parentSegment.slice(1);
  
  return {
    path: `/${parentSegment}`,
    label: capitalizedParent
  };
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  maxLength = 10,
  parentPath,
  parentLabel,
  isDetail = false
}) => {
  const truncatedTitle = truncateText(title, maxLength);
  
  // 現在のパスから親ページの情報を取得
  const parentInfo = parentPath && parentLabel 
    ? { path: parentPath, label: parentLabel }
    : getParentInfo(window.location.pathname);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50, translateX: "-50%" }}
      animate={{
        opacity: 1,
        y: 0,
        translateX: "-50%",
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: 1.6,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      aria-label="パンくずリスト"
      className={`font-russo ${styles["breadcrumb"]}`}
    >
      <ol className={`${styles["breadcrumb__list"]}`}>
        {/* Home */}
        <li className={styles["breadcrumb__item"]}>
          <Link
            href="/"
            className={`${styles["breadcrumb__link"]} ${styles["hover-un"]}`}
          >
            Home
          </Link>
        </li>

        {isDetail ? (
          // 詳細ページの場合は親ページリンクとタイトルを表示
          <>
            <li className={styles["breadcrumb__item"]}>
              <Link
                href={parentInfo.path as Route}
                className={`${styles["breadcrumb__link"]} ${styles["hover-un"]}`}
              >
                {parentInfo.label}
              </Link>
            </li>
            <li className={styles["breadcrumb__item"]}>
              <span title={title}>{truncatedTitle}</span>
            </li>
          </>
        ) : (
          // 通常ページの場合はタイトルのみ表示
          <li className={styles["breadcrumb__item"]}>
            <span title={title}>{truncatedTitle}</span>
          </li>
        )}
      </ol>
    </motion.nav>
  );
};

export default Breadcrumb;
