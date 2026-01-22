import "client-only";

import { useEffect, RefObject } from "react";
import gsap from "gsap";

interface AnimationSettings {
  initial: {
    opacity: number;
    rotateY: number;
    rotateX: number;
    scale: number;
    y: number;
    x: number;
    duration: number;
  };
  animate: {
    opacity: number;
    rotateY: number;
    rotateX: number;
    scale: number;
    y: number;
    x: number;
    duration: number;
    clearProps: string;
  };
}

export const useWorkCardAnimation = (cardRef: RefObject<HTMLElement | null>, id: number) => {
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let currentBreakpoint = "mobile";

    const getAnimationSettings = () => {
      const mediaQuery1280 = window.matchMedia("(min-width: 1280px)");
      const mediaQuery1536 = window.matchMedia("(min-width: 1536px)");

      // デフォルトの設定（モバイル用｜1280px未満）
      let settings: AnimationSettings = {
        initial: {
          opacity: 0,
          rotateY: 0,
          rotateX: 0,
          scale: 0.8,
          y: 100,
          x: 0,
          // perspective: 0,
          duration: 0.8,
        },
        animate: {
          opacity: 1,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          y: 0,
          x: 0,
          // perspective: 0,
          duration: 0.8,
          clearProps: "transform,perspective", // トランスフォーム関連プロパティをクリア
        },
      };

      // 現在のブレイクポイントを更新
      const newBreakpoint = mediaQuery1536.matches
        ? "large"
        : mediaQuery1280.matches
          ? "medium"
          : "mobile";

      // ブレイクポイントが変更された場合のトランスフォームリセット
      if (currentBreakpoint !== newBreakpoint && newBreakpoint === "mobile") {
        // モバイルビューに切り替わった時に全てのトランスフォームをリセット
        gsap.set(card, {
          clearProps: "all", // 全てのGSAPプロパティをクリア
        });
        currentBreakpoint = newBreakpoint;
        return settings;
      }

      // 1280px以上のディスプレイ用の設定
      if (mediaQuery1280.matches) {
        currentBreakpoint = newBreakpoint;
        if (id === 1) {
          settings = {
            initial: {
              opacity: 0,
              rotateY: -360,
              rotateX: 0,
              scale: 0.6,
              y: 100,
              x: 0,
              duration: 0.8,
            },
            animate: {
              opacity: 1,
              rotateY: 0,
              rotateX: 0,
              scale: 0.75,
              y: 0,
              x: 0,
              duration: 0.8,
              clearProps: "transform,perspective",
            },
          };
        } else if (id === 2) {
          settings = {
            initial: {
              opacity: 0,
              rotateY: -360,
              rotateX: 0,
              scale: 0.6,
              y: 100,
              x: 0,
              duration: 0.8,
            },
            animate: {
              opacity: 1,
              rotateY: 0,
              rotateX: 0,
              scale: 0.75,
              y: 0,
              x: 0,
              duration: 0.8,
              clearProps: "transform,perspective",
            },
          };
        } else if (id === 3) {
          settings = {
            initial: {
              opacity: 0,
              rotateY: -360,
              rotateX: 0,
              scale: 0.6,
              y: 100,
              x: 0,
              duration: 0.8,
            },
            animate: {
              opacity: 1,
              rotateY: 0,
              rotateX: 0,
              scale: 0.75,
              y: 0,
              x: 0,
              duration: 0.8,
              clearProps: "transform,perspective",
            },
          };
        } else if (id === 4) {
          settings = {
            initial: {
              opacity: 0,
              rotateY: -360,
              rotateX: 0,
              scale: 0.6,
              y: 50,
              x: 0,
              duration: 0.8,
            },
            animate: {
              opacity: 1,
              rotateY: 0,
              rotateX: 0,
              scale: 0.75,
              y: 0,
              x: 0,
              duration: 0.8,
              clearProps: "transform,perspective",
            },
          };
        } else if (id === 5) {
          settings = {
            initial: {
              opacity: 0,
              rotateY: -360,
              rotateX: 0,
              scale: 0.6,
              y: 100,
              x: 0,
              duration: 0.8,
            },
            animate: {
              opacity: 1,
              rotateY: 0,
              rotateX: 0,
              scale: 0.75,
              y: 0,
              x: 0,
              duration: 0.8,
              clearProps: "transform,perspective",
            },
          };
        }
      }

      // 1536px以上のディスプレイ用の設定
      if (mediaQuery1536.matches) {
        if (id === 1) {
          settings.animate.scale = 0.85;
        } else if (id === 2) {
          settings.animate.scale = 0.85;
        } else if (id === 3) {
          settings.animate.scale = 0.85;
        } else if (id === 4) {
          settings.animate.scale = 0.85;
        } else if (id === 5) {
          settings.animate.scale = 0.85;
        }
      }

      return settings;
    };

    const animateCard = (immediate = false) => {
      const settings = getAnimationSettings();

      if (immediate) {
        gsap.set(card, settings.animate);
      } else {
        // アニメーション前に既存のトランスフォームをクリア
        gsap.set(card, {
          clearProps: "transform",
        });

        // 初期状態を設定
        gsap.set(card, settings.initial);

        // タイトルのアニメーション後に開始するための基本遅延
        const baseDelay = 1.8;

        // アニメーションを実行
        gsap.to(card, {
          ...settings.animate,
          duration: 1.2,
          ease: "power3.out",
          delay: baseDelay + (id - 1) * 0.2,
          clearProps: "transform", // アニメーション後にtransformプロパティをクリア
        });
      }
    };

    const handleResize = () => {
      const mediaQuery1280 = window.matchMedia("(min-width: 1280px)");

      // 1280px未満の場合、全てのトランスフォームをクリア
      if (!mediaQuery1280.matches) {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          y: 0,
          x: 0,
          perspective: "none",
          duration: 0.3,
          ease: "power2.out",
          clearProps: "transform,perspective",
        });
      } else {
        const settings = getAnimationSettings();
        gsap.to(card, {
          ...settings.animate,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    // 初回アニメーション実行
    animateCard();

    // リサイズイベントの登録
    let resizeTimer: NodeJS.Timeout;
    const resizeHandler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clearTimeout(resizeTimer);
      gsap.set(card, {
        clearProps: "transform",
      });
    };
  }, [id, cardRef]);
};
