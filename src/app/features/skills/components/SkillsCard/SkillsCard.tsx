"use client";

import Image from "next/image";
import styles from "./SkillsCard.module.css";
import { Link } from "next-view-transitions";
import { useSkillsCardAnimation } from "@/app/features/skills/hooks/useSkillsCardAnimation";
import { motion } from "motion/react";

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
  viewTransitionLabel: string;
  viewTransitionLogoWrapper: string;
  viewTransitionLogoBg: string;
}

const SkillsCard = ({
  skillTitle,
  skillLink,
  skillLogo,
  label,
  index,
  viewTransitionName,
  viewTransitionImage,
  viewTransitionBg,
  viewTransitionLabel,
  viewTransitionLogoWrapper,
  viewTransitionLogoBg,
}: CardProps) => {

  const { cardRef } = useSkillsCardAnimation({ index });

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 70 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 12, 
            delay: 1.8 + (0.1 * index),
            duration: 1, 
            ease: "easeInOut" 
          },
        }}
        ref={cardRef}
        id="card"
        className={`${styles["skills-card"]} ${viewTransitionBg} ${styles["scroll-driven-animation"]}`}
      >
        <Link
          href={`/skills/${skillLink}`}
          rel="noopener noreferrer"
          className={`${styles["skills-card-link"]}`}
        >
          <div className={styles["skills-card-content"]}>
            <div className={`${styles["skills-logo-wrapper"]} ${viewTransitionLogoWrapper}`}>
              <div className={`${styles["skills-logo-bg"]} ${viewTransitionLogoBg}`} >
                <Image
                  src={skillLogo}
                  alt={skillTitle}
                  className={`${styles["skills-logo"]} ${viewTransitionImage}`}
                  width={156}
                  height={156}
                />
              </div>
            </div>
            <div className={styles["skills-info"]}>
              <h2 className={`font-russo ${styles["skills-title"]} ${viewTransitionName}`}>
                {skillTitle}
              </h2>
              <div className={`font-russo ${styles["skills-label"]} ${viewTransitionLabel}`}>
                {label}
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    </>
  );
};

export default SkillsCard;
