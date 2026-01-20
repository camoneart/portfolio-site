"use client";

import { motion } from "motion/react";
import { CircleCheck } from "lucide-react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./TraitsSection.module.css";

const TraitsSection = () => {
  return (
    <div className={styles["about-traits"]}>
      <SectionHeader
        title="Traits"
        icon={CircleCheck}
        iconSize={20}
        iconClassName="about-focus-icon"
      />
      <div className={styles["about-content"]}>
        <dl className={styles["about-list"]}>
          <TraitItem title="私の特徴" value="ポジティブ / 知的好奇心 / 探究心 / 自走力 / 継続力" />
          <TraitItem title="得意なこと" value="ダイエット（過去-40kgの減量に成功）" />
          <TraitItem title="苦手なこと" value="怒ること / 諦めること" />
        </dl>
      </div>
    </div>
  );
};

interface TraitItemProps {
  title: string;
  value: string;
}

const TraitItem = ({ title, value }: TraitItemProps) => (
  <div className={styles["about-content-group"]}>
    <motion.dt
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
    >
      <span className={styles["light-effect"]}>{title}</span>
    </motion.dt>
    <motion.dd
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut" }}
      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
    >
      <p>{value}</p>
    </motion.dd>
  </div>
);

export default TraitsSection;
