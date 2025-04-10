"use client";

import React from "react";
import styles from "./AboutSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
import { User, Flame, Sparkle } from 'lucide-react';
import { motion } from "motion/react";

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
            transition: { type: "spring", stiffness: 100, damping: 12, delay: 1.8, duration: 1, ease: "easeInOut" },
          }}
          className={styles["about-container"]}
        >
          <div className={styles["about-wrapper"]}>
            <div className={`${styles["about-profile"]}`}>
              <div className={styles["about-header"]}>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2, duration: 0.6, ease: "easeInOut" }}
                  className={styles["about-profile-icon"]}>
                  <User size={25} color="#ff6b4a" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.7, ease: "easeInOut" }}
                  className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}>Profile</motion.h2>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.1, duration: 1.3, ease: "easeInOut" }}
                  className={styles["about-border"]}
                ></motion.div>
              </div>
              <div className={`${styles["about-content"]}`}>
                <dl className={styles["about-list"]}>
                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]} ${styles["about-list-title-en"]}`}>
                      <span className={styles["light-effect"]}>Birthday</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>1999 / 07 / 10</motion.dd>
                  </div>
                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]} ${styles["about-list-title-en"]}`}>
                      <span className={styles["light-effect"]}>Name</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>青山 魁修｜Aoyama Kaishu</motion.dd>
                  </div>
                </dl>
                {/* /.about-list */}
              </div>
              {/* /.about-content */}
            </div>
            {/* /.about-profile */}

            <div className={`${styles["about-hobby"]}`}>
              <div className={styles["about-header"]}>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2, duration: 0.6, ease: "easeInOut" }}
                  className={styles["about-hobby-icon"]}>
                  <Flame size={21} color="#ff6b4a" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}>Hobby</motion.h2>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.1, duration: 1.3, ease: "easeInOut" }}
                  className={styles["about-border"]}
                ></motion.div>
              </div>
              <div className={`${styles["about-content"]}`}>
                <dl className={styles["about-list"]}>
                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>学ぶことが好きです。</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      興味を持ったもの、気になったことについて学び、自分の知識やスキルアップに繋げます。
                    </motion.dd>
                  </div>
                  <div className={styles["about-content-group"]}>
                    <motion.dt 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-hobby-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>モダン技術のキャッチアップ</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      技術力の向上を目的として、日々、情報収集と学習を行っています。特に、興味を持った技術は実際にコードを書いて検証し、実践的な理解を深めることを心がけています。
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-hobby-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>ギャラリーサイトの閲覧</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      デザイン、UI/UX、インタラクションの知見を深めるため、国内外のギャラリーサイトを日常的に閲覧しています。また、<em>｢心地よく、心躍るようなインタラクションを実装できるエンジニアに成長したい｣</em>という想いを実現するため、日々、学習に取り組んでいます。
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-hobby-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>AIについての学習</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      AIについて学習を行いながら日常的にLLMを利用しています。AIを活用し、生産性を上げることで、今まで以上に<em>クリエイティブと向き合う時間に集中できるようになれる</em>と思っています。
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-hobby-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>読書</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      技術書やビジネス書、ジャンルを問わず気になった書籍を読むのが好きです。表紙を見て直感で気になった書籍があれば、まず目次に目を通し、気になるトピックがあればとりあえず購入することが多いです。読書では、<em>新たな知恵を得たり、自分とは違った考え方や価値観を学ぶことができる</em>ため、書籍と向き合う時間を大切にしています。私にとっての書籍は、<em>｢先人の知恵を学ぶことができるアイテム｣</em>といった存在です。
                    </motion.dd>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      お気に入りの書籍は、<em>｢クリエイティブの授業 STEAL LIKE AN ARTIST &quot;君がつくるべきもの&quot;をつくれるようになるために｣</em>です。
                    </motion.dd>
                  </div>
                </dl>
                {/* /.about-list */}
              </div>
              {/* /.about-content */}
            </div>
            {/* /.about-hobby */}

            <div className={`${styles["about-vision"]}`}>
              <div className={styles["about-header"]}>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={styles["about-vision-icon"]}>
                  <Sparkle size={20} color="#ff6b4a" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}>Vision</motion.h2>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.1, duration: 1.3, ease: "easeInOut" }}
                  className={styles["about-border"]}
                ></motion.div>
              </div>
              <div className={`${styles["about-content"]}`}>
                <dl className={styles["about-list"]}>
                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>思い出に残るようなエクスペリエンスを提供したい</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      <em>｢ユーザーの関心を引きつけ、ユーザーの思い出に残る｣</em>そんなエクスペリエンスを提供できるようになりたいです。また、エンジニアとして<em>ユーザーに寄り添い、ユーザーの想いを形にする</em>ことを大切にし、ユーザーにとって価値ある体験を創造していきたいと考えています。
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>モノとの対話</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      <em>こちらの動作に対してプロダクトが反応を返してくれる。</em>そんな｢モノとの対話｣を表現できるエンジニアを目指しています。
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>常にチャレンジし続ける</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      <em>｢変化を恐れず、現状に満足するな｣</em>をモットーとしています。
                    </motion.dd>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      地に足をつけ、学びを大切とし、チャレンジし続けることで、<em>｢見たことも無い、想像もできなかった場所へ行ける｣</em>と私は信じています。
                    </motion.dd>
                  </div>
                </dl>
                {/* /.about-list */}
              </div>
              {/* /.about-content */}
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

export default AboutSection;
