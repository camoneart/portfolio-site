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
  LINE_DELAY: 0,         // 初期遅延時間（アニメーション即時開始）（ms）
  LINE_ANIMATION: 1000, // 中央の縦線が伸びるアニメーション継続時間（ms）
  EXPAND_ANIMATION: 100, // 左右の白背景が拡大するアニメーション継続時間（ms）
  OVERLAY_FADE: 500    // 最終的なフェードアウトアニメーション継続時間（ms）
} as const;

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  overlayColor = '#000',
  lineColor = '#fff',
  expandingOverlayColor = '#fff',
  timing = {
    lineDelay: ANIMATION_TIMING.LINE_DELAY,        // 中央線のアニメーション開始タイミング（0ms）
    expandDelay: ANIMATION_TIMING.LINE_ANIMATION, // 中央線のアニメーション完了後、左右拡大エフェクト開始、1秒持続（1000ms）
    fadeDelay: ANIMATION_TIMING.LINE_ANIMATION + ANIMATION_TIMING.EXPAND_ANIMATION, // 拡大完了後、フェードアウト開始、1.1秒持続（1100ms）
    hideDelay: ANIMATION_TIMING.LINE_ANIMATION + ANIMATION_TIMING.EXPAND_ANIMATION + ANIMATION_TIMING.OVERLAY_FADE, // 全アニメーション完了後にコンポーネント非表示、1.6秒持続（1600ms）
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