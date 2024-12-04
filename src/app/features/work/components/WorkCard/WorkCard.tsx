'use client'

import Link from 'next/link';
import styles from './WorkCard.module.css'
import { useEffect } from 'react';
import Image from 'next/image';

interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  labels: { no: string; value: string }[];
}

const WorkCard = ({ id, image, title, description, labels }: CardProps) => {
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
    <div id="card" className={`${styles["card"]} ${styles[`card-no-${id}`]}`}>
      <Link href={`/works/${id}`} className={styles["card-content"]}>
        <figure className={styles["card-figure"]}>
          <Image
            src={image}
            alt={title}
            width={800}
            height={450}
            className={styles["card-img"]}
          />
        </figure>
        <h2 className={styles["card-title"]}>{title}</h2>
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
    </div>
  );
}

export default WorkCard;