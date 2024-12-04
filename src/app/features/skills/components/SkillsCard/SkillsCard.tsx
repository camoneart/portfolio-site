"use client";

import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './SkillsCard.module.css';
import { skillsItemDate } from '../SkillsItemsList/SkillsItemList';

const SkillsCard = ({ skillItem }: { skillItem: typeof skillsItemDate[number] }) => {
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

  return (
    <Link key={skillItem.id} href={`${skillItem.link}`} target="_blank" rel="noopener noreferrer" className={styles["skills-card-link"]}>
      <div id="card" className={styles["skills-card"]}>
        <div className={styles["skills-card-content"]}>
          <div className={styles["skills-logo-wrapper"]}>
            <div className={styles["skills-logo-bg"]}>
              <Image src={skillItem.skillLogo} alt={skillItem.skillTitle} className={styles["skills-logo"]} width={156} height={156} />
            </div>
          </div>
          <div className={styles["skills-info"]}>
            <h2 className={styles["skills-title"]}>{skillItem.skillTitle}</h2>
            <div className={styles["skills-label"]}>{skillItem.label}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SkillsCard;