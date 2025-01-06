import React from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";

interface ContactBreadcrumbProps {
  contactTitle: string;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// 型宣言
interface ContactBreadcrumbProps {
  contactTitle: string;
}

const ContactBreadcrumb: React.FC<ContactBreadcrumbProps> = ({contactTitle}) => {
  // ここで最大文字数を設定
  const maxTitleLength = 10;
  const truncatedTitle = truncateText(contactTitle, maxTitleLength);

  return (
    <nav aria-label="パンくずリスト" className={styles["breadcrumb"]}>
      <ol className={`${styles["breadcrumb__list"]}`}>
        <li className={styles["breadcrumb__item"]}>
          <Link href="/" className={styles["breadcrumb__link"]}>Home</Link>
        </li>
        <li className={styles["breadcrumb__item"]}>
          <span title={contactTitle}>{truncatedTitle}</span>
        </li>
      </ol>
    </nav>
  );
};

export default ContactBreadcrumb;
