import styles from "./WorkCardList.module.css";
import { worksData } from "@/app/features/works/data/works";
import * as Works from "@/app/features/works/components";

const WorkCardList = () => {
  return (
    <div className={styles["cards-content"]}>
      <div className={styles["cards"]}>
        {worksData.map((cardData) => (
          <Works.WorkCard key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
};

export default WorkCardList;
