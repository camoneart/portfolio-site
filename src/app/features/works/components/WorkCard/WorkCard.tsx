'use client'

import { Link } from 'next-view-transitions'
import styles from './WorkCard.module.css'
import { useRef } from 'react';
import Image from 'next/image';
import { useWorkCardMouseEffect } from '../../hooks/useWorkCardMouseEffect';
import { useWorkCardAnimation } from '../../hooks/useWorkCardAnimation';
import type { Route } from 'next';

interface CardDataProps {
  id: number;
  image: string;
  workTitle: string;
  description: string;
  labels: { no: string; value: string }[];
  viewTransitionName: string;
  viewTransitionImage: string;
}

const WorkCard = ({ id, image, workTitle, description, labels, viewTransitionName, viewTransitionImage }: CardDataProps) => {
  const cardRef = useRef<HTMLElement>(null);

  useWorkCardMouseEffect();
  useWorkCardAnimation(cardRef, id);

  return (
    <article 
      ref={cardRef}
      id="card"
      className={`${styles["card"]} ${styles[`card-no-${id}`]} ${styles["scroll-driven-animation"]}`}
    >
      <Link 
        href={`/works/${id}` as Route} 
        rel="noopener noreferrer" 
        className={styles["card-content-link"]}
      >
        <figure className={styles["card-figure"]}>
          <Image
            src={image}
            alt={workTitle}
            width={800}
            height={450}
            className={`${styles["card-img"]} ${viewTransitionImage}`}
            priority
          />
        </figure>
        <h2 className={`font-russo ${styles["card-title"]} ${viewTransitionName}`}>{workTitle}</h2>
        <p className={styles["card-description"]}>{description}</p>
        <div className={styles["card-footer"]}>
          {labels.map((label, index) => (
            <div key={index} className={`font-russo ${styles["card-label"]}`}>
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