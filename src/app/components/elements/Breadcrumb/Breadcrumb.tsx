"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";
import { motion } from "motion/react";
import { LinkProps } from "next/link";

interface BreadcrumbProps {
  title: string;
  maxLength?: number;
  parentPath?: LinkProps<string>["href"];
  parentLabel?: string;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

// カスタムフック: useMediaQuery
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // SSRでのハイドレーション時の不一致を防ぐため、
    // 初期値はfalseとし、クライアントサイドでのみ更新
    const media = window.matchMedia(query);
    
    const updateMatch = () => {
      setMatches(media.matches);
    };

    // 初期値を設定
    updateMatch();
    
    // リスナーを追加
    media.addEventListener("change", updateMatch);
    
    // クリーンアップ
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  maxLength: defaultMaxLength = 28,
  parentPath,
  parentLabel,
}) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 767px)");
  const effectiveMaxLength = isMobile ? 10 : isTablet ? 15 : defaultMaxLength;
  const truncatedTitle = truncateText(title, effectiveMaxLength);

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
          damping: parentPath ? 10 : 12,
          delay: parentPath ? 0 : 1.6,
          duration: 1,
          ease: "easeInOut",
        },
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
