import styles from "./WorkCardList.module.css";
import * as Work from "..";
import { worksData } from "@/app/features/works/components/WorksSection/WorksSection";

const WorkCardList = () => {
  return (
    <div className={`${styles["cards-content"]}`}>
      <div className={styles["cards"]}>
        {worksData.map((cardData) => (
          <Work.WorkCard key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
};

export default WorkCardList;
