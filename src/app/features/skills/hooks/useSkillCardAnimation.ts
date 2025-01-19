import { useEffect, useRef } from "react";

interface UseSkillAnimationProps {
  index: number;
}

export const useSkillCardAnimation = ({ index }: UseSkillAnimationProps) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return; // cardRef.currentがnullの場合は処理を中断

    let rafId: number;
    const cards = document.querySelectorAll(`#card`);
    const cardElements = Array.from(cards) as HTMLElement[];
    const rectCache = new WeakMap<HTMLElement, DOMRect>();

    // マウスムーブエフェクト
    const handleMouseMove = (e: MouseEvent) => {
      // 既存のrAFをキャンセル
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        cardElements.forEach((card) => {
          // キャッシュされた位置情報を使用
          let rect = rectCache.get(card);
          if (!rect || e.movementX > 1 || e.movementY > 1) {
            rect = card.getBoundingClientRect();
            rectCache.set(card, rect);
          }

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [index]);

  return { cardRef };
};
