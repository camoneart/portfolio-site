import styles from './WorkCardGrid.module.css'
import WorkCard from '../WorkCard/WorkCard';
import { worksData } from '@/app/works/components/Works/Works';

const WorkCardGrid = () => {
  return (
    <div className={`${styles["cards-content"]}`}>
      <div className={styles["cards"]}>
        {worksData.map((card, index) => (
          <WorkCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default WorkCardGrid;