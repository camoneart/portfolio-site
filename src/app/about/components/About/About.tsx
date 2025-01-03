import React from "react";
import styles from "./About.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
import { User } from 'lucide-react';

export const aboutTitle = "About";
export const aboutSubTitle = "私について";

const About = () => {
  return (
    <>
      <Breadcrumb title={aboutTitle} />
      <section className={styles["about"]}>
        <TitleAnimation title={aboutTitle} subTitle={aboutSubTitle} />

        <div className={styles["about-profile"]}>
          <h2 className={`font-russo ${styles["about-title-lv2"]}`}>Profile</h2>
          <div className={styles["about-profile-icon"]}>
            <User size={30} color="#fff" />
          </div>
          <p className={styles["about-profile-birthday"]}>1999 / 07 / 10</p>
          <div className={styles["about-profile-name"]}>
            <p className={`${styles["about-profile-name-ja"]}`}>青山 魁修</p>
            <p className={`font-russo ${styles["about-profile-name-en"]}`}>Aoyama Kaishu</p>
          </div>
        </div>
        {/* /.about-profile */}

        <div className={styles["about-hobby"]}>
          <h2 className={`font-russo ${styles["about-title-lv2"]}`}>Hobby</h2>
          <dl className={styles["about-hobby-list"]}>
          <dt className={styles["about-hobby-list-title"]}>技術情報のインプット、アウトプット</dt>
            <dd className={styles["about-hobby-list-description"]}>
              技術力の向上を目的として、日々情報収集と学習を行っています。特に、興味を持った技術は実際にコードを書いて検証し、実践的な理解を深めることを心がけています。
            </dd>

            <dt className={styles["about-hobby-list-title"]}>ギャラリーサイトの閲覧</dt>
            <dd className={styles["about-hobby-list-description"]}>
              デザイン、UI/UX、インタラクションの知見を深めるため、国内外のギャラリーサイトを日常的に閲覧しています。
            </dd>
            <dd className={styles["about-hobby-list-description"]}>
              また、「心地よく、心躍るようなインタラクションを実装できるエンジニアに成長したい」という想いを実現するため、日々学習に取り組んでいます。
            </dd>
          </dl>
        </div>
        {/* /.about-hobby */}

        <div className={styles["about-vision"]}>
          <h2 className={`font-russo ${styles["about-title-lv2"]}`}>Vision</h2>
          <p>
          「ユーザーの関心を引きつけ、思い出に残るようなエクスペリエンスを提供する」「お客様に寄り添い。お客様の想いを形にする」そんなエンジニアになりたいです。
          「ユーザーの心に残るエクスペリエンスを創造し、お客様の想いを形にする」エンジニアを目指しています。
          </p>
          <p>
            こちらの動作に対してプロダクトが反応を返してくれる。そんな「モノとの対話」を表現できるエンジニアを目指しています。
          </p>
        </div>
        {/* /.about-vision */}
      </section>
    </>
  );
};

export default About;
