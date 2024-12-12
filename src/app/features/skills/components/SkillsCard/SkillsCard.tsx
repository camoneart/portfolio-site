"use client";

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import styles from './SkillsCard.module.css';
import gsap from 'gsap';
import { Link } from 'next-view-transitions'

interface CardProps {
  id: number;
  skillTitle: string;
  skillLink: string;
  skillLogo: string;
  label: string;
  link: string;
  index: number;
  viewTransitionName: string;
  viewTransitionImage: string;
  viewTransitionBg: string;
}

const SkillsCard = ({ id, skillTitle, skillLink, skillLogo, label, index, viewTransitionName, viewTransitionImage, viewTransitionBg }: CardProps) => {

  const cardRef = useRef<HTMLElement>(null);

  // GSAPを使用したカードアニメーション
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return; // cardRef.currentがnullの場合は処理を中断
    const initialDelay = 0.65; // タイトルアニメーション後の初期遅延

    // カードの初期状態を設定
    gsap.set(card, {
      opacity: 0,
      y: 100,
    });

    // カードのアニメーション
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: initialDelay + (0.1 * index), // 初期遅延 + インデックスベースの遅延
      clearProps: "transform" // アニメーション後にtransformプロパティをクリア
    });

    // マウスムーブエフェクト
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
  }, [index]);

  return (
    <>
    <article  ref={cardRef} id="card" className={`${styles["skills-card"]} ${
      
    }`}>
      <Link href={`/skills/${skillLink}`} rel="noopener noreferrer" className={`${styles["skills-card-link"]}`}>
        <div className={styles["skills-card-content"]}>
          <div className={styles["skills-logo-wrapper"]}>
            <div className={styles["skills-logo-bg"]}>
              <Image src={skillLogo} alt={skillTitle} className={`${styles["skills-logo"]} ${viewTransitionImage}`} width={156} height={156} />
            </div>
          </div>
          <div className={styles["skills-info"]}>
            <h2 className={`${styles["skills-title"]} ${viewTransitionName}`}>{skillTitle}</h2>
            <div className={styles["skills-label"]}>{label}</div>
          </div>
        </div>
      </Link>
    </article>
    </>
  )
}

export default SkillsCard;
