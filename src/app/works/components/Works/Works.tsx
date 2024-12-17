import React from "react";
import WorkCardGrid from "@/app/features/work/components/WorkCardList/WorkCardList";
import styles from "./Works.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";


export const worksTitle = "Works";
export const worksSubTitle = "制作実績"

interface WorksData {
  id: number;
  image: string;
  workTitle: string;
  description: string;
  labels: { no: string; value: string }[];
  skillsList: string;
  siteUrl: string;
  role: string;
  username: string;
  password: string;
  summary: string;
  viewTransitionName: string;
  viewTransitionImage: string;
}

export const worksData: WorksData[] = [
  {
    id: 1,
    image: "/images/works/work01.jpg",
    workTitle: "CareSend｜有資格介護人材が集まる介護派遣サービス",
    description:
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の介護派遣サービスのLPサイト」になります。",
    labels: [{ no: "Card No.", value: "001/004" }],
    skillsList: "HTML, CSS, Sass, JavaScript, Swiper, GSAP, webpack",
    siteUrl: "https://otowebdev.com/caresend/",
    role: "コーディング",
    username: "demo",
    password: "demo01",
    summary:
      "また、BASIC認証をかけているため、お手数ですがサイトのアクセス時に、ユーザーネーム「demo」、パスワード「demo01」の入力をお願いいたします。",
    viewTransitionName: "view-transition-title-work-1",
    viewTransitionImage: "view-transition-img-work-1",
  },
  {
    id: 2,
    image: "/images/works/work02.jpg",
    workTitle:
      "青牡丹工務店｜大阪市北区の住宅建築・リフォーム・公共事業なら青牡丹工務店",
    description:
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の建築会社のサイト」になります。",
    labels: [{ no: "Card No.", value: "002/004" }],
    skillsList: "HTML, CSS, Sass, JavaScript, Swiper, GSAP, webpack",
    siteUrl: "https://otowebdev.com/aobotan/",
    role: "コーディング",
    username: "demo",
    password: "demo02",
    summary:
      "また、BASIC認証をかけているため、お手数ですがサイトのアクセス時に、ユーザーネーム「demo」、パスワード「demo02」の入力をお願いいたします。",
    viewTransitionName: "view-transition-title-work-2",
    viewTransitionImage: "view-transition-img-work-2",
  },
  {
    id: 3,
    image: "/images/works/work03.jpg",
    workTitle: "採用特設サイト｜株式会社TETOTE",
    description:
      "こちらのサイトは、Figmaで作成されたWordPressオリジナルテーマのデザインカンプを基にコーディングを行った「架空のITコンサルファームの採用サイト」になります。",
    labels: [{ no: "Card No.", value: "003/004" }],
    skillsList:
      "HTML, CSS, Sass, JavaScript, PHP, WordPress, Swiper, GSAP, webpack",
    siteUrl: "https://otowebdev.com/tetote/",
    role: "コーディング",
    username: "demo",
    password: "demo03",
    summary:
      "また、BASIC認証をかけているため、お手数ですがサイトのアクセス時に、ユーザーネーム「demo」、パスワード「demo03」の入力をお願いいたします。",
    viewTransitionName: "view-transition-title-work-3",
    viewTransitionImage: "view-transition-img-work-3",
  },
  {
    id: 4,
    image: "/images/works/work04.jpg",
    workTitle: "Aoyama｜Creative Web Developer",
    description:
      "こちらのサイトは、私のポートフォリオサイトになります。",
    labels: [{ no: "Card No.", value: "004/004" }],
    skillsList:
      "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, React Three Fiber, GSAP, Motion, Howler.js, React Hook Form, Zod, Vercel",
    siteUrl: "https://aoyamadev.com",
    role: "デザイン, コーディング",
    username: "",
    password: "",
    summary:
      "当ポートフォリオサイトは、サイトデザインを自ら考え、コーディングまで行いました。トップページの3Dコンテンツは「React Tree Fiber」で制作。ドットパターンで表現した背景のアニメーションや、カードの出現アニメーションは「GSAP」で実装。また、カード型UIには「View Transitions API」を利用して、スムーズに流れるような遷移アニメーションを実現しています。ホバーアニメーションでは、こちらの動作に対してプロダクトが反応を返してくれるような「対話」を意識してアニメーションを実装いたしました。BGMの再生には、オーディオライブラリ「Howler.js」を使用いたしました。「...」デプロイはVercelで行っています。",
    viewTransitionName: "view-transition-title-work-4",
    viewTransitionImage: "view-transition-img-work-4",
  },
];

const Works = () => {
  return (
    <>
      <section className={styles["works-section"]}>
        <TitleAnimation title={worksTitle} subTitle={worksSubTitle} />
        <WorkCardGrid />
      </section>
    </>
  );
};

export default Works;
