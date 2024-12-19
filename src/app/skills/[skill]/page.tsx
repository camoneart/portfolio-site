import React from "react";
import { skillsData } from "../components/Skills/Skills";
import Image from "next/image";
import styles from "./SkillDetail.module.css";
import { generateSkillMetadata } from "./metadata";
import HoverMeButton from "@/app/components/elements/HovermeButton/HoverMeButton";

export async function generateStaticParams() {
  return skillsData.map((skillData) => ({
    skill: skillData.skillLink,
  }));
}

export const generateMetadata = generateSkillMetadata;

const SkillDetail = ({ params }: { params: { skill: string } }) => {
  const skill = skillsData.find((s) => s.skillLink === params.skill);

  if (!skill) {
    return <div>スキルが見つかりませんでした。</div>;
  }

  return (
    <div className="common-container">
      <div className={styles["skill-info-container"]}>
        <div className={`${styles["skill-content"]} ${skill.viewTransitionBg}`}>
          <div
            className={`${styles["skill-logo-wrapper"]} ${skill.viewTransitionLogoWrapper}`}
          >
            <div
              className={`${styles["skill-logo-bg"]} ${skill.viewTransitionLogoBg}`}
            >
              <Image
                src={skill.skillLogo}
                alt={skill.skillTitle}
                className={`${styles["skill-logo"]} ${skill.viewTransitionImage}`}
                width={100}
                height={100}
                priority
              />
            </div>
          </div>
          <h1
            className={`font-russo text-4xl sm:text-5xl ${styles["skill-title"]} ${skill.viewTransitionName}`}
          >
            {skill.skillTitle}
          </h1>
          <div
            className={`${styles["skill-label"]} ${skill.viewTransitionLabel}`}
          >
            {skill.label}
          </div>
          <p className={styles["skill-description"]}>{skill.description}</p>
          <HoverMeButton />
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
