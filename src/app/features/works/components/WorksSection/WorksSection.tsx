import styles from "./WorksSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
import * as Works from "@/app/features/works/components";

export const worksTitle = "Works";
export const worksSubTitle = "制作実績";

const WorksSection = () => {
  return (
    <>
      <Breadcrumb title={worksTitle} />
      <section className={styles["works"]}>
        <TitleAnimation title={worksTitle} subTitle={worksSubTitle} />
        <Works.WorkCardList />
      </section>
    </>
  );
};

export default WorksSection;
