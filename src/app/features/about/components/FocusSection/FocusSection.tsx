"use client";

import { motion } from "motion/react";
import { Focus } from "lucide-react";
import { SectionHeader } from "../shared";
import styles from "../AboutSection/AboutSection.module.css";

const FocusSection = () => {
  return (
    <div className={styles["about-focus"]}>
      <SectionHeader
        title="Focus"
        icon={Focus}
        iconSize={20}
        iconClassName="about-focus-icon"
      />
      <div className={styles["about-content"]}>
        <dl className={styles["about-list"]}>
          <div className={styles["about-content-group"]}>
            <motion.dt
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
              className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
            >
              <span className={styles["light-effect"]}>AIに注力しています</span>
            </motion.dt>
            <motion.dd
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut" }}
              className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
            >
              <p>
                LLM / Generative AI / AI Agentに注力し、AIを日常的に活用しています。
                AIを活用して生産性を上げることで、
                <em>
                  人は今まで以上にクリエイティブと向き合う時間に集中できるようになれる
                </em>
                と私は考えています。
              </p>
            </motion.dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default FocusSection;
