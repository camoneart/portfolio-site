import React from "react";
import { Components } from "react-markdown";
import styles from "./CustomEmphasis.module.css";

export const CustomEmphasis: Components["p"] = ({ children, ...props }) => {
  if (typeof children === "string") {
    // 最初に "guest" パターンと "guest_view" パターンを処理
    let text = children.replace(/(guest_view[0-9]{2}|guest)/g, (match) => {
      return `<em class="${styles["emphasis-value"]}">${match}</em>`;
    });

    // 次に特定の文章パターンを処理
    text = text.replace(
      /(noindexとnofollowを設定し、検索エンジンのインデックスから除外しています。)/g,
      `<em class="${styles["emphasis-value"]}">$1</em>`
    );

    return (
      <p
        {...props}
        dangerouslySetInnerHTML={{ __html: text }}
        className={styles["emphasis"]}
      />
    );
  }
  return <p {...props}>{children}</p>;
};
