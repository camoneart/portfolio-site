import React, { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
  /** 黒背景のカラー */
  overlayColor?: string;
  /** 中央線のカラー */
  lineColor?: string;
  /** 拡大オーバーレイのカラー */
  expandingOverlayColor?: string;
  /** アニメーションの各フェーズの時間（ミリ秒） */
  timing?: {
    lineDelay?: number;    // 白線が開始されるまでの遅延
    expandDelay?: number;  // 拡大が開始されるまでの遅延
    fadeDelay?: number;    // フェードアウトが開始されるまでの遅延
    hideDelay?: number;    // コンポーネントが非表示になるまでの遅延
  };
  /** ローディング完了時のコールバック */
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  overlayColor = '#000',
  lineColor = '#fff',
  expandingOverlayColor = '#fff',
  timing = {
    lineDelay: 1500,
    expandDelay: 2500,
    fadeDelay: 3000,
    hideDelay: 3500,
  },
  onLoadingComplete,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showLine, setShowLine] = useState(false);
  const [expand, setExpand] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 白線の表示開始
    const lineTimer = setTimeout(() => {
      setShowLine(true);
    }, timing.lineDelay);

    // 左右への拡大開始
    const expandTimer = setTimeout(() => {
      setExpand(true);
    }, timing.expandDelay);

    // フェードアウト開始
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, timing.fadeDelay);

    // ローディング画面を非表示
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, timing.hideDelay);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(expandTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [timing, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      {/* 黒背景のオーバーレイ */}
      <div 
        className={`${styles.overlay} ${fadeOut ? styles['overlay-hidden'] : styles['overlay-visible']}`}
        style={{ backgroundColor: overlayColor }}
      />

      {/* 中央の白線 */}
      <div className={styles['line-container']}>
        <div
          className={`${styles.line} ${showLine ? styles['line-visible'] : ''}`}
          style={{ backgroundColor: lineColor }}
        />
      </div>

      {/* 拡大する白いオーバーレイ */}
      <div
        className={`${styles['expanding-overlay']} ${
          expand ? styles['expanding-overlay-expanded'] : styles['expanding-overlay-initial']
        }`}
        style={{ backgroundColor: expandingOverlayColor }}
      />
    </div>
    // /.container
  );
};

export default LoadingScreen;