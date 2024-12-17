import React from "react";
import styles from "./About.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";

export const aboutTitle = "About";
export const aboutSubTitle = "私について"

const About = () => {
  return (
    <section className={styles["about-section"]}>
      <TitleAnimation title={aboutTitle} subTitle={aboutSubTitle} />
      <p>デザインも実装もできるクリエイターに憧れています。</p>
      <p>
        サイトデザインとサイト実装は分業するのが、この業界の主流だとは思うのです。
      </p>
      <p>
        ただ、「UIも設計し、実際に動くようにするところまで実装できるクリエイター」に憧れがあります。「モノづくりに、自分のこだわりを持っているんだな」「クリエイティブでカッコいいな」と思うのです。
      </p>
      <p>心地よいインタラクションが好きです。</p>
      <p>
        「心地よく、心躍るようなインタラクション」を実装できる人になりたいです。
      </p>
      <p>
        こちらの動作に対してプロダクトが反応を返してくれる。そんな「モノとの対話」を表現できる人を目指しています。
      </p>
    </section>
  );
};

export default About;
