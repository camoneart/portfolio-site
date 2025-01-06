"use client";

import Image from "next/image";
import styles from "./SkillsCard.module.css";
import { Link } from "next-view-transitions";
import { useSkillsCardAnimation } from "@/app/features/skills/hooks/useSkillsCardAnimation";

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

  const { cardRef, isAnimationComplete } = useSkillsCardAnimation({ index });

  return (
    <>
      <article
        ref={cardRef}
        id="card"
        //ここでstateがtrueのとき、scroll-driven-animationを付与
        className={`${styles["skills-card"]} ${viewTransitionBg} ${isAnimationComplete ? styles["scroll-driven-animation"] : ""}`}
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
      </article>
    </>
  );
};

export default SkillsCard;
