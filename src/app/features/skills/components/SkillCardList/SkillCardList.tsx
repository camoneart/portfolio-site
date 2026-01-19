import styles from "./SkillCardList.module.css";
import { SkillCard } from "../SkillCard";
import { skillsData } from "@/app/features/skills/data/skills";

const SkillCardList = () => {
  return (
    <div className={styles["skills-layout"]}>
      {skillsData.map((skillData, index) => (
        <SkillCard key={skillData.id} {...skillData} index={index} />
      ))}
    </div>
  );
};

export default SkillCardList;
