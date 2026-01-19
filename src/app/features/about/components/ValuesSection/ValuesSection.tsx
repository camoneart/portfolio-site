"use client";

import { motion } from "motion/react";
import { Sparkle } from "lucide-react";
import { SectionHeader } from "../shared";
import styles from "../AboutSection/AboutSection.module.css";

const ValuesSection = () => {
  return (
    <div className={styles["about-vision"]}>
      <SectionHeader
        title="Values"
        icon={Sparkle}
        iconSize={20}
        iconClassName="about-vision-icon"
      />
      <div className={styles["about-content"]}>
        <dl className={styles["about-list"]}>
          <ValueItem title="日々アップデートする">
            <p>
              <em>とにかく自分をアップデートし続けたいです。</em>
              やりたいこと、際限ないです。
            </p>
          </ValueItem>

          <ValueItem title={<>&quot;喜び&quot; や &quot;幸せ&quot; に繋がる価値を届ける</>}>
            <p>
              Webサービスを通じてユーザーに<em>&quot;喜びや幸せに繋がる価値&quot;</em>
              を届け、<em>社会にポジティブな変化を生み出す活動を続けていきたいです。</em>
              そのために、知的好奇心を原動力に学び続け、これからもクリエイティブに没頭していきたいです。
            </p>
          </ValueItem>

          <ValueItem title="常に挑戦する">
            <p>
              <em>&quot;変化を恐れず、現状に満足するな&quot;</em>をモットーとしています。
            </p>
            <p>
              <em>&quot;楽な道のりよりも、険しい道の歩き方&quot;</em>
              を知りたいし、地に足をつけ、学びを大切とし、謙虚さを忘れず、挑戦を続けることで、
              <em>&quot;見たことも無い、想像もできなかった景色と出会える&quot;</em>
              と私は信じています。
            </p>
          </ValueItem>
        </dl>
      </div>
    </div>
  );
};

interface ValueItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const ValueItem = ({ title, children }: ValueItemProps) => (
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
      {children}
    </motion.dd>
  </div>
);

export default ValuesSection;
