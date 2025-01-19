import React from "react";
import styles from "./SkillsCardList.module.css";
import SkillCard from "../SkillCard/SkillCard";
import { skillsData } from "@/app/skills/components/Skills/Skills";


const SkillsCardList = () => {
  return (
    <>
      <div className={styles["skills-layout"]}>
        {skillsData.map((skillData, index) => (
          <SkillCard key={skillData.id} {...skillData} index={index} />
        ))}
      </div>
    </>
  );
};

export default SkillsCardList;
