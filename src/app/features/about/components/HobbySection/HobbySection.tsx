"use client";

import { motion } from "motion/react";
import { Flame } from "lucide-react";
import { SectionHeader } from "../shared";
import styles from "../AboutSection/AboutSection.module.css";

const HobbySection = () => {
  return (
    <div className={styles["about-hobby"]}>
      <SectionHeader
        title="Hobby"
        icon={Flame}
        iconSize={21}
        iconClassName="about-hobby-icon"
      />
      <div className={styles["about-content"]}>
        <dl className={styles["about-list"]}>
          <HobbyItem title="Web開発">
            <p>
              知的好奇心を原動力に<em>&quot;調べ、学び、試す&quot;</em>
              そんな日々を過ごしています。
            </p>
            <p>
              興味を持った技術はコードを書いて挙動を検証し、トライ&エラーを繰り返しながら理解を深めるようにしています。
            </p>
            <p>
              また、日々学習を続けていく中で
              <em>&quot;継続すること&quot;</em>の大切さを改めて実感し、
              <em>
                &quot;学ぶ&quot; 行為そのものを &quot;楽しい体験&quot;
                に変えられたら継続に繋がるよな。
              </em>
              と考え、
              <a
                href="https://github.com/camoneart/outputquest"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["about-product-link"]}
              >
                &quot;OUTPUT QUEST 叡智の継承者&quot;
              </a>
              というWebアプリを開発しました。
            </p>
            <p>
              <span className={`font-bold ${styles["light-effect"]}`}>現在の注力</span>
              ：Next.js / React / TypeScript / Claude Code / Generative AI / Context
              Engineering / Interaction / Animation / UI / UX
            </p>
          </HobbyItem>

          <HobbyItem title="音楽">
            <p>音楽から日々のエネルギーを得ています。</p>
            <p>
              音楽は僕に
              <em>&quot;現実逃避&quot; ではなく &quot;現実と向き合う力&quot;</em>
              を与えてくれます。
            </p>
            <p>
              <span className={`font-bold ${styles["light-effect"]}`}>
                好きなミュージシャン
              </span>
              ：King Gnu / Saucy Dog / Vaundy / 藤井 風 / SUPER BEAVER etc...
            </p>
          </HobbyItem>

          <HobbyItem title="映像作品">
            <p>映画・ドラマ・アニメなど映像作品を観るのが好きです。</p>
            <p>
              映像作品は私に、
              <em>
                &quot;新しい考え方&quot; や &quot;視点&quot;、&quot;異なる文化&quot; や
                &quot;価値観&quot; との出会いをもたらしてくれる大切な存在
              </em>
              です。
            </p>
            <p>
              <span className={`font-bold ${styles["light-effect"]}`}>好きな作品</span>
              ：アメイジング・スパイダーマン / マイ・インターン / ワンダー 君は太陽 /
              最高の人生の見つけ方 / 最高のふたり / The Rookie / 信長協奏曲 /
              王様ランキング / Dr.Stone etc...
            </p>
          </HobbyItem>

          <HobbyItem title="読書">
            <p>ジャンルを問わず気になった書籍を読むのが好きです。</p>
            <p>
              読書では
              <em>新たな知識を得たり、著者の考え方や価値観を学ぶことができます。</em>
            </p>
            <p>
              私にとっての書籍は<em>&quot;先人の知恵を学べるアイテム&quot;</em>です。
            </p>
            <p>
              <span className={`font-bold ${styles["light-effect"]}`}>
                お気に入りの書籍
              </span>
              ：クリエイティブの授業 STEAL LIKE AN ARTIST &quot;君がつくるべきもの&quot;
              をつくれるようになるために
            </p>
          </HobbyItem>
        </dl>
      </div>
    </div>
  );
};

interface HobbyItemProps {
  title: string;
  children: React.ReactNode;
}

const HobbyItem = ({ title, children }: HobbyItemProps) => (
  <div className={styles["about-content-group"]}>
    <motion.dt
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.4, duration: 0.6, ease: "easeInOut" }}
      className={`${styles["about-list-title"]} ${styles["scroll-driven-animation"]}`}
    >
      <span className={styles["light-effect"]}>{title}</span>
    </motion.dt>
    <motion.dd
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut" }}
      className={`${styles["about-description"]} ${styles["scroll-driven-animation"]}`}
    >
      {children}
    </motion.dd>
  </div>
);

export default HobbySection;
