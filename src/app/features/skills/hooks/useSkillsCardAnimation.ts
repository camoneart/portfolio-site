import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

interface UseSkillsAnimationProps {
  index: number;
}

export const useSkillsCardAnimation = ({ index }: UseSkillsAnimationProps) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const initialDelay = 0.65;
    const hasSeenAnimation = sessionStorage.getItem('hasSeenSkillsAnimation');

    // カードの初期状態を設定
    gsap.set(card, {
      opacity: hasSeenAnimation ? 1 : 0,
      y: hasSeenAnimation ? 0 : 100,
    });

    // 初回訪問時のみアニメーションを実行
    if (!hasSeenAnimation) {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: initialDelay + 0.1 * index,
        clearProps: "transform",
        onComplete: () => {
          // アニメーション完了後にセッションストレージに保存
          sessionStorage.setItem('hasSeenSkillsAnimation', 'true');
        }
      });
    }

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

  return { cardRef };
}