'use client'

// import Link from 'next/link';
import { Link } from 'next-view-transitions'
import styles from './WorkCard.module.css'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface CardData {
  id: number;
  image: string;
  workTitle: string;
  description: string;
  labels: { no: string; value: string }[];
}

const WorkCard = ({ id, image, workTitle, description, labels }: CardData) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(`#card`);
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
  
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };
  
    document.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let currentBreakpoint = 'mobile';

    // レスポンシブ対応のアニメーション設定を定義
    const getAnimationSettings = () => {
      const mediaQuery1280 = window.matchMedia('(min-width: 1280px)');
      const mediaQuery1536 = window.matchMedia('(min-width: 1536px)');

      // デフォルトの設定（モバイル用 - 1280px未満）
      let settings = {
        initial: {
          opacity: 0,
          rotateY: 0,
          rotateX: 0,
          scale: 0.8,
          y: 30,
          x: 0,
          // perspective: 0,
          duration: 0.8
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
          clearProps: 'transform,perspective'  // トランスフォーム関連プロパティをクリア
        }
      };

      // 現在のブレイクポイントを更新
      const newBreakpoint = mediaQuery1536.matches 
        ? 'large' 
        : mediaQuery1280.matches 
          ? 'medium' 
          : 'mobile';
      
      // ブレイクポイントが変更された場合のトランスフォームリセット
      if (currentBreakpoint !== newBreakpoint && newBreakpoint === 'mobile') {
        // モバイルビューに切り替わった時に全てのトランスフォームをリセット
        gsap.set(card, {
          clearProps: 'all'  // 全てのGSAPプロパティをクリア
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
              rotateY: 25 - 360,
              rotateX: -5,
              scale: 0.7,
              y: 50,
              x: 20,
              // perspective: 3000,
              duration: 0.8
            },
            animate: {
              opacity: 1,
              rotateY: 25,
              rotateX: -5,
              scale: 0.85,
              y: 0,
              x: 0,
              // perspective: 3000,
              duration: 0.8,
              clearProps: 'transform,perspective'
            }
          };
        } else if (id === 2) {
          settings = {
            initial: {
              opacity: 0,
              rotateY: -360,
              rotateX: 0,
              scale: 0.6,
              y: 50,
              x: 0,
              // perspective: 3000,
              duration: 0.8
            },
            animate: {
              opacity: 1,
              rotateY: 0,
              rotateX: 0,
              scale: 0.75,
              y: 0,
              x: 0,
              // perspective: 3000,
              duration: 0.8,
              clearProps: 'transform,perspective'
            }
          };
        } else if (id === 3) {
          settings = {
            initial: {
              opacity: 0,
              rotateY: -25 - 360,
              rotateX: -5,
              scale: 0.7,
              y: 50,
              x: -20,
              // perspective: 3000,
              duration: 0.8
            },
            animate: {
              opacity: 1,
              rotateY: -25,
              rotateX: -5,
              scale: 0.85,
              y: 0,
              x: 0,
              // perspective: 3000,
              duration: 0.8,
              clearProps: 'transform,perspective'
            }
          };
        }
      }

      // 1536px以上のディスプレイ用の設定
      if (mediaQuery1536.matches) {
        if (id === 1) {
          settings.animate.scale = 0.95;
        } else if (id === 2) {
          settings.animate.scale = 0.85;
        } else if (id === 3) {
          settings.animate.scale = 0.95;
        }
      }

      return settings;
    };

    // アニメーションの実行
    const animateCard = (immediate = false) => {
      const settings = getAnimationSettings();
      
      if (immediate) {
        gsap.set(card, settings.animate);
      } else {
        // アニメーション前に既存のトランスフォームをクリア
        gsap.set(card, {
          clearProps: 'transform'
        });

        // 初期状態を設定
        gsap.set(card, settings.initial);

        // タイトルのアニメーション後に開始するための基本遅延
        const baseDelay = 0.65;

        // アニメーションを実行
        gsap.to(card, {
          ...settings.animate,
          duration: 1.2,
          ease: "power3.out",
          delay: baseDelay + (id - 1) * 0.2,
          clearProps: "transform" // アニメーション後にtransformプロパティをクリア
        });
      }
    };

    // 初回アニメーション実行
    animateCard();

    // リサイズイベントのリスナーを設定
    const handleResize = () => {
      const mediaQuery1280 = window.matchMedia('(min-width: 1280px)');
      
      // 1280px未満の場合、全てのトランスフォームをクリア
      if (!mediaQuery1280.matches) {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          y: 0,
          x: 0,
          perspective: 'none',
          duration: 0.3,
          ease: "power2.out",
          clearProps: 'transform,perspective'
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

    // リサイズイベントの登録（デバウンス処理付き）
    let resizeTimer: NodeJS.Timeout;
    const resizeHandler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };
    window.addEventListener('resize', resizeHandler);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', resizeHandler);
      clearTimeout(resizeTimer);
      gsap.set(card, {
        clearProps: 'transform'
      });
    };
  }, [id]);

  return (
    <article 
      ref={cardRef}
      id="card" 
      className={`${styles["card"]} ${styles[`card-no-${id}`]}`}
    >
      <Link href={`/works/${id}`} rel="noopener noreferrer" className={styles["card-content-link"]}>
        <figure className={styles["card-figure"]}>
          <Image
            src={image}
            alt={workTitle}
            width={800}
            height={450}
            className={styles["card-img"]}
          />
        </figure>
        <h2 className={styles["card-title"]}>{workTitle}</h2>
        <p className={styles["card-description"]}>{description}</p>
        <div className={styles["card-footer"]}>
          {labels.map((label, index) => (
            <div key={index} className={styles["card-label"]}>
              <span className={styles["card-label-no"]}>{label.no}</span>
              <span className={styles["card-label-value"]}>{label.value}</span>
            </div>
          ))}
        </div>
      </Link>
    </article>
  );
}

export default WorkCard;