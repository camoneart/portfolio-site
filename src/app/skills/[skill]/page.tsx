import React from "react";
import { skillsData } from "../components/Skills/Skills";
import Image from "next/image";
import styles from "./SkillDetail.module.css";
import { generateSkillMetadata } from "./metadata";
import SkillsViewTransitionsButton from "@/app/features/skills/components/SkillsViewTransitionsButton/SkillsViewTransitionsButton";

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
        <Image
          src={skill.skillLogo}
          alt={skill.skillTitle}
          className={`${styles["skill-logo"]} ${skill.viewTransitionImage}`}
          width={100}
          height={100}
          priority
        />
        <h1
          className={`${styles["skills-title"]} ${skill.viewTransitionName} text-5xl`}
        >
          {skill.skillTitle}
        </h1>
        <SkillsViewTransitionsButton />
      </div>
    </div>
  );
};

export default SkillDetail;
