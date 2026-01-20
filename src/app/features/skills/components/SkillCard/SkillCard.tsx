"use client";

import Image from "next/image";
import styles from "./SkillCard.module.css";
import { Link } from "next-view-transitions";
import { useSkillCardAnimation } from "@/app/features/skills/hooks/useSkillCardAnimation";
import { motion } from "motion/react";
import type { Route } from "next";

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

const SkillCard = ({
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
  const { cardRef } = useSkillCardAnimation({ index });

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
            delay: 1.8 + 0.1 * index,
            duration: 1,
            ease: "easeInOut",
          },
        }}
        ref={cardRef}
        id="card"
        className={`${styles["skill-card"]} ${viewTransitionBg} ${styles["scroll-driven-animation"]}`}
      >
        <Link
          href={`/skills/${skillLink}` as Route}
          rel="noopener noreferrer"
          className={`${styles["skill-card-link"]}`}
        >
          <div className={styles["skill-card-content"]}>
            <div className={`${styles["skill-logo-wrapper"]} ${viewTransitionLogoWrapper}`}>
              <div className={`${styles["skill-logo-bg"]} ${viewTransitionLogoBg}`}>
                <Image
                  src={skillLogo}
                  alt={skillTitle}
                  className={`${styles["skill-logo"]} ${viewTransitionImage}`}
                  width={156}
                  height={156}
                  priority
                />
              </div>
            </div>
            <div className={styles["skill-info"]}>
              <h2 className={`font-russo ${styles["skill-title"]} ${viewTransitionName}`}>
                {skillTitle}
              </h2>
              <div className={`font-russo ${styles["skill-label"]} ${viewTransitionLabel}`}>
                {label}
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    </>
  );
};

export default SkillCard;
