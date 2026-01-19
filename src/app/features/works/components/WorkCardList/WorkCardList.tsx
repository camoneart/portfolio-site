import styles from "./WorkCardList.module.css";
import WorkCard from "../WorkCard/WorkCard";
import { worksData } from "@/app/features/works/data/works";

const WorkCardList = () => {
  return (
    <div className={styles["cards-content"]}>
      <div className={styles["cards"]}>
        {worksData.map((cardData) => (
          <WorkCard key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
};

export default WorkCardList;
