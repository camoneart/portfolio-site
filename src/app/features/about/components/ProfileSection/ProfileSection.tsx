"use client";

import { motion } from "motion/react";
import { User, AtSign } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./ProfileSection.module.css";

const ProfileSection = () => {
  return (
    <div className={styles["about-top-box"]}>
      {/* Profile */}
      <div className={styles["about-profile"]}>
        <SectionHeader
          title="Profile"
          icon={User}
          iconSize={25}
          iconClassName="about-profile-icon"
        />
        <div className={styles["about-content"]}>
          <dl className={styles["about-profile-list"]}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
              className={styles["about-profile-img-box"]}
            >
              <Image
                src="/images/about/profile/profile-img.jpg"
                alt="プロフィール画像"
                width={170}
                height={170}
                className={styles["about-profile-img"]}
                priority
              />
            </motion.div>
            <div className={styles["about-profile-info"]}>
              <ProfileItem label="Birthday" value="1999 / 07 / 10" />
              <ProfileItem label="Name" value="Kaishu Aoyama" />
              <ProfileItem label="Nickname" value="camone" />
            </div>
          </dl>
        </div>
      </div>

      {/* SNS */}
      <div className={styles["about-sns"]}>
        <SectionHeader
          title="SNS"
          icon={AtSign}
          iconSize={20}
          iconClassName="about-sns-icon"
        />
        <div className={styles["about-sns-content"]}>
          <ul className={styles["about-sns-list"]}>
            <SnsItem href="https://github.com/camoneart" logo="/images/about/sns/github-logo.svg" name="GitHub" />
            <SnsItem href="https://x.com/camoneart" logo="/images/about/sns/x-logo.svg" name="X" />
            <SnsItem href="https://zenn.dev/camoneart" logo="/images/about/sns/zenn-logo.svg" name="Zenn" />
          </ul>
        </div>
      </div>
    </div>
  );
};

interface ProfileItemProps {
  label: string;
  value: string;
}

const ProfileItem = ({ label, value }: ProfileItemProps) => (
  <div className={styles["about-content-group"]}>
    <motion.dt
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]} ${styles["about-list-title-en"]}`}
    >
      <span className={styles["light-effect"]}>{label}</span>
    </motion.dt>
    <motion.dd
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut" }}
      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
    >
      {value}
    </motion.dd>
  </div>
);

interface SnsItemProps {
  href: string;
  logo: string;
  name: string;
}

const SnsItem = ({ href, logo, name }: SnsItemProps) => (
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
    className={styles["about-sns-item"]}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles["about-sns-link"]}
    >
      <div className={styles["about-sns-link-content"]}>
        <div className={styles["about-sns-logo-wrapper"]}>
          <div className={styles["about-sns-logo-box"]}>
            <div className={styles["about-sns-logo-bg"]}>
              <Image src={logo} alt={name} width={20} height={20} priority />
            </div>
          </div>
        </div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut" }}
          className={styles["about-sns-title"]}
        >
          {name}
        </motion.h3>
      </div>
    </a>
  </motion.li>
);

export default ProfileSection;
