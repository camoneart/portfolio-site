"use client";

import styles from "./AboutSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
import { motion } from "motion/react";
import ProfileSection from "../ProfileSection/ProfileSection";
import HobbySection from "../HobbySection/HobbySection";
import FocusSection from "../FocusSection/FocusSection";
import TraitsSection from "../TraitsSection/TraitsSection";
import ValuesSection from "../ValuesSection/ValuesSection";

export const aboutTitle = "About";
export const aboutSubTitle = "私について";

const AboutSection = () => {
  return (
    <>
      <Breadcrumb title={aboutTitle} />
      <section className={styles["about"]}>
        <TitleAnimation title={aboutTitle} subTitle={aboutSubTitle} />
        <motion.div
          initial={{ height: 0, opacity: 0, y: 70 }}
          animate={{
            height: "auto",
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 1.8,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className={styles["about-container"]}
        >
          <div className={styles["about-wrapper"]}>
            <ProfileSection />
            <HobbySection />
            <FocusSection />
            <TraitsSection />
            <ValuesSection />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutSection;
