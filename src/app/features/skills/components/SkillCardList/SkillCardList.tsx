import styles from "./SkillCardList.module.css";
import { skillsData } from "@/app/features/skills/data/skills";
import * as Skills from "@/app/features/skills/components";

const SkillCardList = () => {
  return (
    <div className={styles["skills-layout"]}>
      {skillsData.map((skillData, index) => (
        <Skills.SkillCard key={skillData.id} {...skillData} index={index} />
      ))}
    </div>
  );
};

export default SkillCardList;
