"use client";

import React from "react";
import styles from "./AboutSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
import { User, Flame, Sparkle, Focus, AtSign } from "lucide-react";
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
            <div className={styles["about-top-box"]}>
              <div className={`${styles["about-profile"]}`}>
                <div className={styles["about-header"]}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 2.2,
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className={styles["about-profile-icon"]}
                  >
                    <User size={25} color="#ff6b4a" />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 2.1,
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}
                  >
                    Profile
                  </motion.h2>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      delay: 2.1,
                      duration: 1.3,
                      ease: "easeInOut",
                    }}
                    className={styles["about-border"]}
                  ></motion.div>
                </div>
                <div className={`${styles["about-content"]}`}>
                  <dl className={`${styles["about-profile-list"]}`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={styles["about-profile-img-box"]}
                    >
                      <Image
                        src={"/images/about/profile/profile-img.jpg"}
                        alt="プロフィール画像"
                        width={155}
                        height={155}
                        className={styles["about-profile-img"]}
                      />
                    </motion.div>
                    <div className={styles["about-profile-info"]}>
                      <div className={styles["about-content-group"]}>
                        <motion.dt
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 3.4,
                            duration: 0.6,
                            ease: "easeInOut",
                          }}
                          className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]} ${styles["about-list-title-en"]}`}
                        >
                          <span className={styles["light-effect"]}>
                            Birthday
                          </span>
                        </motion.dt>
                        <motion.dd
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 3.9,
                            duration: 0.6,
                            ease: "easeInOut",
                          }}
                          className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                        >
                          1999 / 07 / 10
                        </motion.dd>
                      </div>
                      <div className={styles["about-content-group"]}>
                        <motion.dt
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 3.4,
                            duration: 0.6,
                            ease: "easeInOut",
                          }}
                          className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]} ${styles["about-list-title-en"]}`}
                        >
                          <span className={styles["light-effect"]}>Name</span>
                        </motion.dt>
                        <motion.dd
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 3.9,
                            duration: 0.6,
                            ease: "easeInOut",
                          }}
                          className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                        >
                          Kaishu Aoyama
                        </motion.dd>
                      </div>
                      <div className={styles["about-content-group"]}>
                        <motion.dt
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 3.4,
                            duration: 0.6,
                            ease: "easeInOut",
                          }}
                          className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]} ${styles["about-list-title-en"]}`}
                        >
                          <span className={styles["light-effect"]}>
                            Nickname
                          </span>
                        </motion.dt>
                        <motion.dd
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 3.9,
                            duration: 0.6,
                            ease: "easeInOut",
                          }}
                          className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                        >
                          hashirama
                        </motion.dd>
                      </div>
                    </div>
                  </dl>
                  {/* /.about-list */}
                </div>
                {/* /.about-content */}
              </div>
              {/* /.about-profile */}

              <div className={`${styles["about-sns"]}`}>
                <div className={styles["about-header"]}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 2.2,
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className={styles["about-sns-icon"]}
                  >
                    <AtSign size={20} color="#ff6b4a" />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 2.1,
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}
                  >
                    SNS
                  </motion.h2>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      delay: 2.1,
                      duration: 1.3,
                      ease: "easeInOut",
                    }}
                    className={styles["about-border"]}
                  ></motion.div>
                </div>
                <div className={`${styles["about-sns-content"]}`}>
                  <ul className={styles["about-sns-list"]}>
                    <li className={styles["about-sns-item"]}>
                      <Link
                        href={"https://github.com/hashiramaendure"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles["about-sns-link"]}
                      >
                        <div className={styles["about-sns-link-content"]}>
                          <div className={styles["about-sns-logo-wrapper"]}>
                            <div className={styles["about-sns-logo-box"]}>
                              <div className={styles["about-sns-logo-bg"]}>
                                <Image
                                  src={"/images/about/sns/github-logo.svg"}
                                  alt="GitHub"
                                  width={20}
                                  height={20}
                                />
                              </div>
                            </div>
                          </div>
                          <h3 className={styles["about-sns-title"]}>GitHub</h3>
                        </div>
                      </Link>
                    </li>
                    <li className={styles["about-sns-item"]}>
                      <Link
                        href={"https://x.com/hashiramaendure"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles["about-sns-link"]}
                      >
                        <div className={styles["about-sns-link-content"]}>
                          <div className={styles["about-sns-logo-wrapper"]}>
                            <div className={styles["about-sns-logo-box"]}>
                              <div className={styles["about-sns-logo-bg"]}>
                                <Image
                                  src={"/images/about/sns/x-logo.svg"}
                                  alt="X"
                                  width={20}
                                  height={20}
                                />
                              </div>
                            </div>
                          </div>
                          <h3 className={styles["about-sns-title"]}>X</h3>
                        </div>
                      </Link>
                    </li>
                    <li className={styles["about-sns-item"]}>
                      <Link
                        href={"https://zenn.dev/hashiramaendure"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles["about-sns-link"]}
                      >
                        <div className={styles["about-sns-link-content"]}>
                          <div className={styles["about-sns-logo-wrapper"]}>
                            <div className={styles["about-sns-logo-box"]}>
                              <div className={styles["about-sns-logo-bg"]}>
                                <Image
                                  src={"/images/about/sns/zenn-logo.svg"}
                                  alt="Zenn"
                                  width={20}
                                  height={20}
                                />
                              </div>
                            </div>
                          </div>
                          <h3 className={styles["about-sns-title"]}>Zenn</h3>
                        </div>
                      </Link>
                    </li>
                  </ul>
                  {/* /.about-list */}
                </div>
                {/* /.about-content */}
              </div>
              {/* /.about-sns */}
            </div>
            {/* /.about-top-box */}

            <div className={`${styles["about-hobby"]}`}>
              <div className={styles["about-header"]}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2, duration: 0.6, ease: "easeInOut" }}
                  className={styles["about-hobby-icon"]}
                >
                  <Flame size={21} color="#ff6b4a" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}
                >
                  Hobby
                </motion.h2>
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
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <span className={styles["light-effect"]}>Web開発</span>
                    </motion.dt>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        <em>
                          「ユーザーの課題解決に貢献するプロダクト開発に携わりたい」
                        </em>
                      </p>
                      <p>
                        そんな想いから、知的好奇心を原動力に日々キャッチアップと学習に励んでいます。興味を持った技術はコードを書いて挙動を検証することで、理解を深めるようにしています。
                      </p>
                    </motion.dd>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        現在の主な注力：「Next.js（App
                        Router）」「TypeScript」「LLM・Generative
                        AI」「Interaction / Animation」「UI / UX」
                      </p>
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <span className={styles["light-effect"]}>
                        アウトプット
                      </span>
                    </motion.dt>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        私は日々、自己成長を目的にWeb開発とAIの学習に取り組んでいます。
                      </p>
                      <p>
                        キャッチアップとアウトプットを続ける中で、
                        <em>&quot;継続すること&quot;</em>{" "}
                        の大切さを改めて実感し、
                        <em>
                          &quot;学ぶ&quot; という行為を楽しみながら継続したい
                        </em>{" "}
                        という思いが芽生えました。
                        そこで、その課題を解決するために、
                        <em>
                          <Link
                            href="https://outputquest.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            &quot;OUTPUT QUEST　叡智の継承者&quot;
                          </Link>{" "}
                          という &quot;RPG風学習支援アプリ&quot;
                        </em>{" "}
                        を開発しました。
                      </p>
                    </motion.dd>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        最近は、「Obsidian × Cursor によるメモ管理（知的生産）」
                        に興味を持っています。 AI時代において、
                        <em>ノウハウの蓄積</em>と<em>生成AIへのインプット</em>
                        は今後ますます重要になると考えています。
                      </p>
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <span className={styles["light-effect"]}>映画鑑賞</span>
                    </motion.dt>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        映画鑑賞が趣味で、特に洋画を好んでよく観ます。映画は、私にこれまで気づかなかった考え方や視点、異なる文化、価値観との出会いをもたらしてくれる大切な存在です。
                      </p>
                    </motion.dd>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        特に好きな映画は、<em>アメイジング・スパイダーマン</em>,{" "}
                        <em>アクアマン</em>, <em>ワンダーウーマン</em>,{" "}
                        <em>ザ・フラッシュ</em>, <em>ジャスティス・リーグ</em>,{" "}
                        <em>イコライザー</em>, <em>最強のふたり</em>,{" "}
                        <em>幸せのちから</em>, <em>ドリームプラン</em>,{" "}
                        <em>マイ・インターン</em>, <em>素晴らしきかな、人生</em>
                        , <em>ターミナル</em>, <em>イエスタデイ</em>{" "}
                        etc...です。
                      </p>
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <span className={styles["light-effect"]}>読書</span>
                    </motion.dt>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        ジャンルを問わず気になった書籍を読むのが好きです。読書では、
                      </p>
                      <p>
                        <em>
                          新たな知識を得たり、著者の考え方や価値観を学ぶことができます。
                        </em>
                      </p>
                      <p>
                        私にとっての書籍は、
                        <em>｢先人の知恵を学ぶことができるアイテム｣</em>
                        といった存在です。
                      </p>
                    </motion.dd>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        お気に入りの書籍は、
                        <em>
                          ｢クリエイティブの授業 STEAL LIKE AN ARTIST
                          &quot;君がつくるべきもの&quot;をつくれるようになるために｣
                        </em>
                        です。
                      </p>
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
                  className={styles["about-focus-icon"]}
                >
                  <Focus size={20} color="#ff6b4a" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}
                >
                  Focus
                </motion.h2>
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
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <span className={styles["light-effect"]}>
                        AIに注力しています
                      </span>
                    </motion.dt>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        AIについて学びながら日常的にLLMを利用しています。AIを活用し、生産性を上げることで、今まで以上に
                        <em>
                          クリエイティブと向き合う時間に集中できるようになれる
                        </em>
                        と考えています。
                      </p>
                    </motion.dd>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        <em>LLM</em>, <em>Generative AI</em> に加え、最近は{" "}
                        <em>Claude Code</em>, <em>Vibe Coding</em>
                        に注力しています。 また、Web開発やAIに関する技術記事を{" "}
                        <Link
                          href="https://zenn.dev/aoyamadev"
                          className={styles["about-zenn-link"]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Zenn
                        </Link>
                        にて執筆しています。
                      </p>
                    </motion.dd>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        今後はLLMを活用した<em>AI駆動開発</em>
                        でAIのアシストを受けつつ、エンジニアとして試行錯誤を重ね、常にプロダクトの在り方を考えながら
                        <em>ユーザー体験の最適化</em>に挑戦したいです。
                      </p>
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
                  className={styles["about-vision-icon"]}
                >
                  <Sparkle size={20} color="#ff6b4a" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}
                >
                  Vision
                </motion.h2>
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
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <span className={styles["light-effect"]}>
                        {/* 好奇心をくすぐる、心踊るような体験を提供したい。 */}
                        ユーザーに寄り添うエンジニアになる。
                      </span>
                    </motion.dt>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        私が目指すビジョンは
                        <em>「ユーザーに寄り添うエンジニア」</em>です。
                      </p>
                      <p>
                        プロダクトと技術は、ともに
                        <em>
                          ユーザーの課題を解決し価値を届ける手段だと私は考えています。
                        </em>
                      </p>
                      <p>
                        モノづくりを通して、
                        <em>ワクワクし、感動を覚え、思い出に残る。</em>
                        そんなエクスペリエンスを提供できるようになりたいです。
                      </p>
                      <p>
                        エンジニアとして利用者の想いを形にするためにも、
                        日々の学習を怠らず、価値ある体験の創造に挑み続け、
                        <em>私は日々成長し続けます。</em>
                      </p>
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <span className={styles["light-effect"]}>
                        モノとの対話
                      </span>
                    </motion.dt>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        <em>
                          こちらの動作に対してプロダクトが反応を返してくれる。
                        </em>
                        そんな<em>｢モノとの対話｣</em>
                        を表現できるようになりたいです。
                      </p>
                    </motion.dd>
                  </div>

                  <div className={styles["about-content-group"]}>
                    <motion.dt
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <span className={styles["light-effect"]}>
                        常に挑戦する
                      </span>
                    </motion.dt>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        <em>｢変化を恐れず、現状に満足するな｣</em>
                        をモットーとしています。
                      </p>
                    </motion.dd>
                    <motion.dd
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.9,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
                    >
                      <p>
                        <em>
                          地に足をつけ、学びを大切とし、謙虚さを忘れず、挑戦を続けることで、｢見たことも無い、想像もできなかった場所へ行ける｣
                        </em>
                        と私は信じています。
                      </p>
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
