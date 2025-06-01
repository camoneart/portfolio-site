"use client";

import React from "react";
import styles from "./AboutSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
import { User, Flame, Sparkle, Focus } from 'lucide-react';
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

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
                <dl className={`${styles["about-profile-list"]}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                    className={styles["about-profile-img-box"]}>
                    <Image src={"/images/about/profile/profile-img.jpg"} alt="プロフィール画像" width={165} height={165} className={styles["about-profile-img"]} />
                  </motion.div>
                  <div className={styles["about-profile-info"]}>
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
                        className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>Kaishu Aoyama</motion.dd>
                    </div>
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
                      className={`${styles["about-hobby-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>技術力の向上</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                        知的好奇心を原動力に、日々キャッチアップと学習に励んでいます。特に興味を持った技術には、実際にコードを書いて検証し、その技術を用いた小規模なWebアプリを開発して挙動を確認することで、理解を深めるよう努めています。技術力を向上させることで、ユーザーが抱える問題の解決に貢献したいと考えています。
                    </motion.dd>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                        現在の主な注力は、<em>Next.js（App Router）</em>, <em>Type Script</em>, <em>インタラクション</em>, <em>UI / UX</em>, <em>AI</em>です。
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-hobby-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>音楽</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      音楽から日々のエネルギーを得ています。
                    </motion.dd>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      特に好きなアーティストは、<em>Maroon 5</em>, <em>Vaundy</em>, <em>藤井 風</em>, <em>SUPER BEAVER</em>, <em>Saucy Dog</em>, <em>King Gnu</em>です。
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
                      className={`${styles["about-hobby-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>映画鑑賞</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      映画鑑賞が趣味で、なかでも洋画をよく観ます。映画は、私にこれまで気づかなかった考え方や視点、異なる文化、価値観との出会いをもたらしてくれる大切な存在です。
                    </motion.dd>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                      特に好きな映画は、<em>アメイジング・スパイダーマン</em>, <em>イコライザー</em>, <em>最強のふたり</em>, <em>ドリームプラン</em>, <em>マイ・インターン</em>, <em>素晴らしきかな、人生</em>, <em>ターミナル</em>, <em>イエスタデイ</em> etc...です。
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
                      ジャンルを問わず気になった書籍を読むのが好きです。読書では、<em>新たな知識を得たり、著者の考え方や価値観を学ぶことができます。</em>私にとっての書籍は、<em>｢先人の知恵を学ぶことができるアイテム｣</em>といった存在です。
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

            <div className={`${styles["about-focus"]}`}>
              <div className={styles["about-header"]}>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={styles["about-focus-icon"]}>
                  <Focus size={20} color="#ff6b4a" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}>Focus</motion.h2>
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
                      className={`${styles["about-hobby-list-title"]} ${styles["scroll-driven-animation"]}`}>
                      <span className={styles["light-effect"]}>AIに注力しています</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                        AIについて学びながら日常的にLLMを利用しています。AIを活用し、生産性を上げることで、今まで以上に<em>クリエイティブと向き合う時間に集中できるようになれる</em>と考えています。
                      </motion.dd>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                        最近は<em>MCP（Model Context Protocol）</em>や<em>AIエージェント</em>に注力しています。実際に、AIエージェントの能力拡張のためにMCPサーバーを活用しています。また、AIに関する技術記事を<Link href="https://zenn.dev/aoyamadev" className={styles["about-zenn-link"]} target="_blank" rel="noopener noreferrer">Zenn</Link>にて執筆しています。
                      </motion.dd>
                  </div>
                </dl>
                {/* /.about-list */}
              </div>
              {/* /.about-content */}
            </div>
            {/* /.about-focus */}

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
                      <span className={styles["light-effect"]}>好奇心をくすぐる、心踊るような体験を提供したい。</span>
                    </motion.dt>
                    <motion.dd 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut"}}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}>
                        モノづくりを通して、<em>ユーザーがワクワクし、感動を覚え、思い出に残る。</em>そんなエクスペリエンスを提供できるようになりたいです。また、エンジニアとして<em>ユーザーに寄り添い、想いを形にする</em>ことを大切にし、<em>価値ある体験を創造することを目指しています。</em>
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
                      <span className={styles["light-effect"]}>常に挑戦する</span>
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
                        地に足をつけ、学びを大切とし、謙虚さを忘れず、挑戦を続けることで、<em>｢見たことも無い、想像もできなかった場所へ行ける｣</em>と私は信じています。
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
