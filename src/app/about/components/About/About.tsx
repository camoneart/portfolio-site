import React from "react";
import styles from "./About.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";

export const aboutTitle = "About";
export const aboutSubTitle = "私について";

const About = () => {
  return (
    <>
      <Breadcrumb title={aboutTitle} />
      <section className={styles["about"]}>
        <TitleAnimation title={aboutTitle} subTitle={aboutSubTitle} />

        <div className={styles["about-profile"]}>
          <h2 className={styles["about-title-lv2"]}>Profile</h2>
          <p className={styles["about-profile-birthday"]}>1999 / 07 / 10</p>
          <div className={styles["about-profile-name"]}>  {/* ここは日本語表記と英語表記のnameを回転させる */}
            <p className={styles["about-profile-name-ja"]}>青山 魁修</p>
            <p className={styles["about-profile-name-en"]}>Aoyama Kaishu</p>
          </div>
        </div>
        {/* /.about-profile */}

        <div className={styles["about-hobby"]}>
          <h2 className={styles["about-title-lv2"]}>Hobby</h2>
          <dl className={styles["about-hobby-list"]}>
            <dt className={styles["about-hobby-list-title"]}>ギャラリーサイトの閲覧</dt>
            <dd className={styles["about-hobby-list-description"]}>デザイン、UI/UX、インタラクションについて学ぶため、日本国内だけでなく海外のギャラリーサイトもよく閲覧しています。</dd>
          </dl>
        </div>

        <div className={styles["about-message"]}>
          <h2 className={styles["about-title-lv2"]}>Message</h2>
          <p>ここは、伝えたい「今の想い」とか「どうなっていきたいのか」など簡潔に書く</p>
          <p>
          「心地よく、心躍るようなインタラクション」を実装できるエンジニアに成長したいです。
          </p>
          <p>
            「ユーザーの関心を引きつけ、思い出に残るようなエクスペリエンスを提供する」「お客様に寄り添い。お客様の想いを形にする」そんなエンジニアになりたいです。
          </p>
          <p>
            こちらの動作に対してプロダクトが反応を返してくれる。そんな「モノとの対話」を表現できるエンジニアを目指しています。
          </p>
        </div>
        {/* /.about-message */}
      </section>
    </>
  );
};

export default About;
