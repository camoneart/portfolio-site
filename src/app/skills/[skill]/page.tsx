import React from "react";
import { Metadata } from 'next';
import { skillsData } from "../components/Skills/Skills";
import Image from "next/image";
import styles from "./SkillDetail.module.css";

export async function generateStaticParams() {
  return skillsData.map((skillData) => ({
    skill: skillData.skillTitle.toLowerCase(),
  }));
}

// メタデータを動的に生成する関数
export async function generateMetadata({ params }: { params: { skill: string } }): Promise<Metadata> {
  const skillData = skillsData.find(s => s.skillTitle.toLowerCase() === params.skill);

  if (!skillData) {
    return {
      title: "Skill Not Found",
      description: "The requested skill could not be found.",
    };
  }

  return {
    title: `${skillData.skillTitle}`,
    description: `このページでは、「${skillData.skillTitle}」を使用して出来ることについてご紹介いたします。`,
  };
}

const SkillDetail = ({ params }: { params: { skill: string } }) => {
  const skill = skillsData.find(s => s.skillTitle.toLowerCase() === params.skill);

  if (!skill) {
    return <div>スキルが見つかりませんでした。</div>;
  }

  return (
    <div className="common-container">
      <div className="skill-info-container">
        <Image
          src={skill.skillLogo}
          alt={skill.skillTitle}
          className={styles["skills-logo"]}
          width={156}
          height={156}
          priority
        />
      </div>
    </div>
  );
};

export default SkillDetail;
