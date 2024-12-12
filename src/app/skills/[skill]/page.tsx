import React from "react";
import { skillsData } from "../components/Skills/Skills";
import Image from "next/image";
import styles from "./SkillDetail.module.css";
import { generateSkillMetadata } from "./metadata";
import SkillsViewTransitions from "@/app/features/skills/components/SkillsViewTransitions/SkillsViewTransitions";

export async function generateStaticParams() {
  return skillsData.map((skillData) => ({
    skill: skillData.skillLink,
  }));
}

export const generateMetadata = generateSkillMetadata;

const SkillDetail = ({ params }: { params: { skill: string } }) => {
  const skill = skillsData.find(
    (s) => s.skillLink === params.skill
  );

  if (!skill) {
    return <div>スキルが見つかりませんでした。</div>;
  }

  return (
    <div className="common-container">
      <h1 className="view-transition-title">{skill.skillTitle}</h1>
      <SkillsViewTransitions skill={skill} />
    </div>
  );
};

export default SkillDetail;
