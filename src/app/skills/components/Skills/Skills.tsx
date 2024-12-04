import React from "react";
import SkillsItemList from "@/app/features/skills/components/SkillsItemsList/SkillsItemList";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <h1 className={`text-8xl font-black tracking-wide text-center mt-5 mb-14 skills-title ${styles["skills-title"]}`}>My Skills List</h1>
        <SkillsItemList />
      </div>
    </>
  )
};

export default Skills;
