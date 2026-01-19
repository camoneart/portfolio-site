"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
  iconSize?: number;
  iconClassName: string;
}

const SectionHeader = ({
  title,
  icon: Icon,
  iconSize = 20,
  iconClassName,
}: SectionHeaderProps) => {
  return (
    <div className={styles["about-header"]}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.6, ease: "easeInOut" }}
        className={styles[iconClassName]}
      >
        <Icon size={iconSize} color="#ff6b8a" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.1, duration: 0.7, ease: "easeInOut" }}
        className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 2.1, duration: 1.3, ease: "easeInOut" }}
        className={styles["about-border"]}
      />
    </div>
  );
};

export default SectionHeader;
