import { SkillCardList } from "../SkillCardList";
import styles from "./SkillsSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";

export const skillsTitle = "Skills";
export const skillsSubTitle = "スキル一覧";

const SkillsSection = () => {
  return (
    <>
      <Breadcrumb title={skillsTitle} />
      <section className={styles["skills"]}>
        <TitleAnimation title={skillsTitle} subTitle={skillsSubTitle} />
        <SkillCardList />
      </section>
    </>
  );
};

export default SkillsSection;
