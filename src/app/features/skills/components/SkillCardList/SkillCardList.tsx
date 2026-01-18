import styles from "./SkillCardList.module.css";
import * as Skill from "@/app/features/skills/components/index";
import { skillsData } from "@/app/skills/components/Skills/Skills";
const SkillCardList = () => {
  return (
    <>
      <div className={styles["skills-layout"]}>
        {skillsData.map((skillData, index) => (
          <Skill.SkillCard key={skillData.id} {...skillData} index={index} />
        ))}
      </div>
    </>
  );
};

export default SkillCardList;
