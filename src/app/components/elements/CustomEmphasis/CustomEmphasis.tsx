import React from 'react';
import { Components } from 'react-markdown';
import styles from './CustomEmphasis.module.css';

export const CustomEmphasis: Components['p'] = ({ children, ...props }) => {
  if (typeof children === 'string') {
    // "demo" と "demo01", "demo02", "demo03" を検出して強調表示
    const text = children.replace(
      /(demo)([0-9]{2})?/g,
      (match, demo, number) => {
        if (number) {
          return `<span class="${styles["emphasis-value"]}">${demo}${number}</span>`;
        }
        return `<span class="${styles["emphasis-value"]}">${demo}</span>`;
      }
    );

    return (
      <p {...props} 
        dangerouslySetInnerHTML={{ __html: text }}
        className={styles['emphasis']}
      />
    );
  }
  return <p {...props}>{children}</p>;
};