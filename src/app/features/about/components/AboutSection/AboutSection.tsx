"use client";

import React from "react";
import styles from "./AboutSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
import { User, Flame, Sparkle, Focus, CircleCheck, AtSign } from "lucide-react";
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
                        width={170}
                        height={170}
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
                          camone
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
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className={styles["about-sns-item"]}
                    >
                      <Link
                        href={"https://github.com/camoneart"}
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
                          <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              delay: 3.9,
                              duration: 0.6,
                              ease: "easeInOut",
                            }}
                            className={styles["about-sns-title"]}
                          >
                            GitHub
                          </motion.h3>
                        </div>
                      </Link>
                    </motion.li>
                    <motion.li
                      className={styles["about-sns-item"]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      <Link
                        href={"https://x.com/camoneart"}
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
                          <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              delay: 3.9,
                              duration: 0.6,
                              ease: "easeInOut",
                            }}
                            className={styles["about-sns-title"]}
                          >
                            X
                          </motion.h3>
                        </div>
                      </Link>
                    </motion.li>
                    <motion.li
                      className={styles["about-sns-item"]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.4,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      <Link
                        href={"https://zenn.dev/camoneart"}
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
                          <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              delay: 3.9,
                              duration: 0.6,
                              ease: "easeInOut",
                            }}
                            className={styles["about-sns-title"]}
                          >
                            Zenn
                          </motion.h3>
                        </div>
                      </Link>
                    </motion.li>
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
                        知的好奇心を原動力に、
                        <em>&quot;調べまくる.ᐟ　試しまくる.ᐟ.ᐟ&quot;</em>
                        そんな日々を過ごしています。興味を持った技術はコードを書いて挙動を検証し、
                        <em>
                          &quot;トライ&エラー&quot;
                          を繰り返しながら理解を深めるようにしています。
                        </em>
                      </p>
                      <p>
                        <em>注力</em>：「Next.js（App
                        Router）」「TypeScript」「LLM / Generative AI / AI
                        Agents」「Interaction / Animation」「UI / UX」
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
                        学び、理解すること
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
                        私は日々、自己成長を目的としたキャッチアップとアウトプットを続けていく中で、
                        <em>&quot;継続すること&quot;</em>{" "}
                        の大切さを改めて実感し、
                        <em>
                          &quot;学ぶ&quot; という行為そのものを
                          &quot;楽しい体験&quot;
                          に変えられたら、継続に繋がるよな。
                        </em>{" "}
                        という思いが芽生えました。
                      </p>
                      <p>
                        この課題解決のために、私は{" "}
                        <Link
                          href="https://outputquest.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles["about-product-link"]}
                        >
                          &quot;OUTPUT QUEST 叡智の継承者&quot;
                        </Link>{" "}
                        というWebアプリを開発しました。
                      </p>
                      <p>
                        コンセプトは{" "}
                        <em>
                          &quot;アウトプットを学びの冒険に変える。RPG風学習支援Webアプリ&quot;
                        </em>{" "}
                        です。
                      </p>
                      <p>
                        ゲーミフィケーション要素がアウトプットという行為を「
                        <em>学びの冒険</em>
                        」という体験に変え、学習の継続をサポートします。ユーザーが学ぶことを楽しみ、理解を深めることに達成感を覚え、
                        <em>&quot;ユーザーの幸福度に繋がる体験価値&quot;</em>
                        の提供で貢献したいという想いで開発しました。
                      </p>
                      <p>
                        また、Web開発やAIに関する技術記事を{" "}
                        <Link
                          href="https://zenn.dev/camoneart"
                          className={styles["about-zenn-link"]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Zenn
                        </Link>
                        にて執筆しています。
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
                      <span className={styles["light-effect"]}>音楽</span>
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
                      <p>音楽から日々のエネルギーを得ています。</p>
                      <p>
                        音楽は、僕に &quot;現実逃避&quot; ではなく
                        <em>&quot;現実と向き合う力&quot;</em>
                        を与えてくれます。
                      </p>
                      <p>
                        <em>好きなミュージシャン</em>：「Vaundy」「King
                        Gnu」「藤井 風」「SUPER BEAVER」「Saucy Dog」etc...
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
                      <p>映画鑑賞が趣味で、特に洋画を好んでよく観ます。</p>
                      <p>
                        映画は私に、
                        <em>
                          これまで気づかなかった考え方や視点、異なる文化や価値観との出会いをもたらしてくれる大切な存在
                        </em>{" "}
                        です。
                      </p>
                      <p>
                        <em>好きな映画</em>
                        ：「アメイジング・スパイダーマン」「ヴェノム」「最高の人生の見つけ方」「最強のふたり」「幸せのちから」「ドリームプラン」「プラダを着た悪魔」「マイ・インターン」「42～世界を変えた男～」「ラ・ラ・ランド」「グリーンブック」「フォレスト・ガンプ」「ショーシャンクの空に」「イコライザー」「アメリカン・スナイパー」「素晴らしきかな、人生」「ターミナル」「イエスタデイ」etc...
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
                      <p>ジャンルを問わず気になった書籍を読むのが好きです。</p>
                      <p>
                        読書では、
                        <em>
                          新たな知識を得たり、著者の考え方や価値観を学ぶことができます。
                        </em>
                      </p>
                      <p>
                        私にとっての書籍は、
                        <em>
                          &quot;先人の知恵を学ぶことができるアイテム&quot;
                        </em>{" "}
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
                        </em>{" "}
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
                        <em>LLM</em>, <em>Generative AI</em>, <em>AI Agents</em>
                        に注力し、AIを日常的に利用しています。
                      </p>
                      <p>
                        AIを活用して生産性を上げることで、
                        <em>
                          今まで以上にクリエイティブと向き合う時間に集中できるようになれる
                        </em>{" "}
                        と私は考えています。
                      </p>
                    </motion.dd>
                  </div>
                </dl>
                {/* /.about-list */}
              </div>
              {/* /.about-content */}
            </div>
            {/* /.about-focus */}

            <div className={`${styles["about-focus"]}`}>
              <div className={styles["about-header"]}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={styles["about-focus-icon"]}
                >
                  <CircleCheck size={20} color="#ff6b4a" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                  className={`font-russo ${styles["about-title-lv2"]} ${styles["scroll-driven-animation"]}`}
                >
                  Traits
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
                      <span className={styles["light-effect"]}>私の特徴</span>
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
                        <em>ポジティブ</em> / <em>知的好奇心</em> /{" "}
                        <em>探究心</em> / <em>自走力</em> / <em>継続力</em>
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
                      <span className={styles["light-effect"]}>得意なこと</span>
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
                        <em>ダイエット（過去-40kgの減量に成功）</em>
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
                      <span className={styles["light-effect"]}>苦手なこと</span>
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
                        <em>怒ること</em> / <em>諦めること</em>
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
                        「来年のための今年」
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
                        「来年のために今年はなにができるだろう？」と常に考えています。
                      </p>
                      <p>
                        <em>とにかく自分をアップデートし続けたいです。</em>
                        やりたいこと、際限ないです。
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
                        &quot;幸せ&quot; に繋がる体験価値を届ける
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
                        エンジニアとして試行錯誤しながらプロダクトの在り方を探求し、ユーザー体験の最適化に挑戦していきたいです。Webサービスを通じてお客様に価値あるプロダクトを高速で届け、
                        <em>&quot;お客様の幸せに繋がる体験価値&quot;</em>
                        の提供で貢献し、
                        <em>
                          社会にポジティブな変化を生み出す活動を続けていきたいです。
                        </em>
                        そのために知的好奇心を原動力にアンラーンして学び続け、クリエイティブに没頭したいです！
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
                        <em>&quot;変化を恐れず、現状に満足するな&quot;</em>
                        をモットーとしています。
                      </p>
                      <p>
                        <em>&quot;楽な道のりよりも、険しい道の歩き方&quot;</em>{" "}
                        を知りたいし、
                        地に足をつけ、学びを大切とし、謙虚さを忘れず、挑戦を続けることで、
                        <em>
                          &quot;見たことも無い、想像もできなかった景色と出会える&quot;
                        </em>
                        と私は信じています。
                      </p>
                      <p>
                        「
                        <em>
                          人生を有意義なものとするため、
                          自らの大事なもののために闘う。何があろうと。
                          例え失敗に終わっても。それこそが最高の生き方です。
                        </em>
                        」
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
