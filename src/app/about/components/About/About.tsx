"use client";

import React from "react";
import styles from "./About.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
import { User, Flame, Sparkle } from 'lucide-react';
import { motion } from "motion/react";

export const aboutTitle = "About";
export const aboutSubTitle = "私について";

const About = () => {
  return (
    <>
      <Breadcrumb title={aboutTitle} />
      <section className={styles["about"]}>
        <TitleAnimation title={aboutTitle} subTitle={aboutSubTitle} />
        <motion.div 
          initial={{ opacity: 0, y: 70 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 1.8, duration: 1, ease: "easeInOut" },
          }}
          className={styles["about-container"]}
        >
          <div className={styles["about-wrapper"]}>
            <div className={`${styles["about-profile"]}`}>
              <div className={styles["about-header"]}>
                <div className={styles["about-profile-icon"]}>
                  <User size={25} color="#ff6b4a" />
                </div>
                <h2 className={`font-russo ${styles["about-title-lv2"]}`}>Profile</h2>
              </div>
              <div className={`${styles["about-content"]} ${styles["about-profile-content"]}`}>
                <div className={styles["about-content-group"]}>
                  <h3 className={`${styles["about-title-lv3"]} ${styles["about-title-lv3-en"]}`}>
                    <span className={styles["light-effect"]}>Birthday</span>
                  </h3>
                  <p className={styles["about-description"]}>1999 / 07 / 10</p>
                </div>
                <div className={styles["about-content-group"]}>
                  <h3 className={`${styles["about-title-lv3"]} ${styles["about-title-lv3-en"]}`}>
                    <span className={styles["light-effect"]}>Name</span>
                  </h3>
                  <p className={`${styles["about-description"]}`}>青山 魁修｜Aoyama Kaishu</p>
                </div>
              </div>
            </div>
            {/* /.about-profile */}

            <div className={`${styles["about-hobby"]}`}>
              <div className={styles["about-header"]}>
                <div className={styles["about-hobby-icon"]}>
                  <Flame size={21} color="#ff6b4a" />
                </div>
                <h2 className={`font-russo ${styles["about-title-lv2"]}`}>Hobby</h2>
              </div>
              <div className={`${styles["about-content"]} ${styles["about-hobby-content"]}`}>
                <dl className={styles["about-hobby-list"]}>
                  <div className={styles["about-content-group"]}>
                    <dt className={styles["about-hobby-list-title"]}>
                      <span className={styles["light-effect"]}>技術情報のインプット、アウトプット</span>
                    </dt>
                    <dd className={styles["about-description"]}>
                      技術力の向上を目的として、日々、情報収集と学習を行っています。特に、興味を持った技術は実際にコードを書いて検証し、実践的な理解を深めることを心がけています。
                    </dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <dt className={styles["about-hobby-list-title"]}>
                      <span className={styles["light-effect"]}>ギャラリーサイトの閲覧</span>
                    </dt>
                    <dd className={styles["about-description"]}>
                      デザイン、UI/UX、インタラクションの知見を深めるため、国内外のギャラリーサイトを日常的に閲覧しています。また、<em>「心地よく、心躍るようなインタラクションを実装できるエンジニアに成長したい」</em>という想いを実現するため、日々、学習に取り組んでいます。
                    </dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <dt className={styles["about-hobby-list-title"]}>
                      <span className={styles["light-effect"]}>読書</span>
                    </dt>
                    <dd className={styles["about-description"]}>
                      技術書やビジネス書、ジャンルに囚われず気になった書籍を読むのが好きです。
                      表紙を見て直感で気になった書籍があれば、まず目次に目を通し、気になるトピックがあればとりあえず購入することが多いです。
                      新たな知恵を得たり、自分とは違った考え方や価値観を学ぶことができるため、書籍と向き合う時間を大切にしています。
                      僕にとっての書籍は、「先人の知恵を学ぶことができるアイテム」といった存在です。
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {/* /.about-hobby */}

            <div className={`${styles["about-vision"]}`}>
              <div className={styles["about-header"]}>
                <div className={styles["about-vision-icon"]}>
                  <Sparkle size={20} color="#ff6b4a" />
                </div>
                <h2 className={`font-russo ${styles["about-title-lv2"]}`}>Vision</h2>
              </div>
              <div className={`${styles["about-content"]} ${styles["about-vision-content"]}`}>
                <div className={styles["about-content-group"]}>
                  <h3 className={styles["about-title-lv3"]}>
                    <span className={styles["light-effect"]}>思い出に残るようなエクスペリエンスを提供したい</span>
                  </h3>
                  <p className={styles["about-description"]}>
                    <em>「ユーザーの関心を引きつけ、ユーザーの思い出に残る」</em>そんなエクスペリエンスを提供できるようになりたいです。
                    また、エンジニアとして<em>ユーザーに寄り添い、ユーザーの想いを形にする</em>ことを大切にし、ユーザーにとって価値ある体験を創造していきたいと考えています。
                  </p>
                </div>
                <div className={styles["about-content-group"]}>
                  <h3 className={`${styles["about-title-lv3"]}`}>
                    <span className={styles["light-effect"]}>モノとの対話</span>
                  </h3>
                  <p className={styles["about-description"]}>
                    <em>こちらの動作に対してプロダクトが反応を返してくれる。</em>そんな「モノとの対話」を表現できるエンジニアを目指しています。
                  </p>
                </div>
              </div>
            </div>
            {/* /.about-vision */}
          </div>
          {/* /.about-wrapper */}
        </motion.div>
        {/* about-container */}
      </section>
    </>
  );
};

export default About;
