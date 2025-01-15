import React from 'react';
import { Components } from 'react-markdown';
import styles from './CustomParagraph.module.css';

export const CustomParagraph: Components['p'] = ({ children, node, ...props }) => {
  if (typeof children === 'string') {
    // 文字列の先頭に"空白"があるかチェック
    const match = children.match(/^(　)(.*)/);
    if (match) {
      const [, dot, rest] = match;  // [全体のマッチ, 空白の部分, 残りのテキスト]
      return (
        <p {...props}>
          <span className={styles["dot-marker"]}>{dot}</span>
          {rest}
        </p>
      );
    }
  }
  return <p {...props}>{children}</p>;
};