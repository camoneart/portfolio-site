import React from "react";
import { Components } from "react-markdown";
import styles from "./CustomParagraph.module.css";

export const CustomParagraph: Components["p"] = ({ children, ...props }) => {
  // children を配列化して先頭の文字列ノードを取得
  const childArray = React.Children.toArray(children);

  if (childArray.length > 0 && typeof childArray[0] === "string") {
    const firstText = childArray[0] as string;
    const match = firstText.match(/^(　)(.*)/);

    // 先頭に全角スペースがある場合、ドット UI を挿入
    if (match) {
      const [, dot, restText] = match;
      const newChildren = [
        <span key="dot" className={styles["dot-marker"]}>
          {dot}
        </span>,
        restText,
        ...childArray.slice(1),
      ];

      return <p {...props}>{newChildren}</p>;
    }
  }

  // デフォルトの描画
  return <p {...props}>{children}</p>;
};
