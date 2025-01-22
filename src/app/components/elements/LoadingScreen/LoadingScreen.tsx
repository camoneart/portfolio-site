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

// アニメーション時間の定数を明確に定義
const ANIMATION_TIMING = {
  LINE_DELAY: 0,
  LINE_ANIMATION: 1500,  // 線のアニメーション時間（ms）
  EXPAND_ANIMATION: 10, // 拡大アニメーション時間（ms）
  OVERLAY_FADE: 500    // オーバーレイのフェード時間（ms）
} as const;

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  overlayColor = '#000',
  lineColor = '#fff',
  expandingOverlayColor = '#fff',
  timing = {
    lineDelay: ANIMATION_TIMING.LINE_DELAY,
    expandDelay: ANIMATION_TIMING.LINE_ANIMATION,  // 線のアニメーション完了後に拡大開始
    fadeDelay: ANIMATION_TIMING.LINE_ANIMATION + ANIMATION_TIMING.EXPAND_ANIMATION,  // 拡大アニメーション完了後にフェード開始
    hideDelay: ANIMATION_TIMING.LINE_ANIMATION + ANIMATION_TIMING.EXPAND_ANIMATION + ANIMATION_TIMING.OVERLAY_FADE, // 全アニメーション完了後に非表示
  },
  onLoadingComplete,
}) => {
  const [showLine, setShowLine] = useState(false);
  const [expand, setExpand] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [unmount, setUnmount] = useState(false);

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

    // フェードアウト完了後にアンマウント
    const unmountTimer = setTimeout(() => {
      setUnmount(true);
      onLoadingComplete?.();
    }, timing.hideDelay || 0);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(expandTimer);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [timing, onLoadingComplete]);

  if (unmount) return null;

  return (
    <div className={styles['loading-screen-container']}>
      {/* 黒背景のオーバーレイ */}
      <div 
        className={`${styles['overlay']} ${fadeOut ? styles['overlay-hidden'] : styles['overlay-visible']}`}
        style={{ backgroundColor: overlayColor }}
      />

      {/* 中央の白線 */}
      <div className={styles['vertical-line-container']}>
        <div
          className={`${styles['vertical-line']} ${showLine ? styles['vertical-line-visible'] : ''} ${fadeOut ? styles["vertical-line-fadeout"] : ""}`}
          style={{ backgroundColor: lineColor }}
        />
      </div>

      {/* 拡大する白いオーバーレイ：左側 */}
      <div
        className={`${styles['expanding-overlay-left']} ${
          expand 
            ? fadeOut 
              ? styles['expanding-overlay-fadeout']
              : styles['expanding-overlay-expanded']
            : styles['expanding-overlay-initial']
        }`}
        style={{ backgroundColor: expandingOverlayColor }}
      />

      {/* 拡大する白いオーバーレイ：右側 */}
      <div
        className={`${styles['expanding-overlay-right']} ${
          expand 
            ? fadeOut 
              ? styles['expanding-overlay-fadeout']
              : styles['expanding-overlay-expanded']
            : styles['expanding-overlay-initial']
        }`}
        style={{ backgroundColor: expandingOverlayColor }}
      />
    </div>
    // /.container
  );
};

export default LoadingScreen;