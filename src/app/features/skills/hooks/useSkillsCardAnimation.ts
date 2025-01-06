import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useState } from 'react';

interface UseSkillsAnimationProps {
  index: number;
}

export const useSkillsCardAnimation = ({ index }: UseSkillsAnimationProps) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  
  // GSAPを使用したカードアニメーション
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return; // cardRef.currentがnullの場合は処理を中断
    const initialDelay = 1.8; // タイトルアニメーション後の初期遅延

    // カードの初期状態を設定
    gsap.set(card, {
      opacity: 0,
      y: 100,
    });

    // カードのアニメーション
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "power2.out",
      delay: initialDelay + 0.1 * index, // 初期遅延 + インデックスベースの遅延
      clearProps: "transform", // アニメーション後にtransformプロパティをクリア
      onComplete: () => {
        // アニメーション完了後にstateを更新
        setIsAnimationComplete(true);
      }
    });

    // マウスムーブエフェクト
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(`#card`);
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [index]);
  return { cardRef, isAnimationComplete };
}