import { useEffect, useRef } from 'react'

interface UseSkillsAnimationProps {
  index: number;
}

export const useSkillsCardAnimation = ({ index }: UseSkillsAnimationProps) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return; // cardRef.currentがnullの場合は処理を中断

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