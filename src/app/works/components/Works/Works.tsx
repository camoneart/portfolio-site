import React from "react";
import WorkCardGrid from "@/app/features/work/components/WorkCardList/WorkCardList";
import styles from "./Works.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";


export const worksTitle = "My Works List";

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
    image: "/images/works/work-1.jpg",
    workTitle: "CareSend｜有資格介護人材が集まる介護派遣サービス",
    description:
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の介護派遣サービスのLPサイト」になります。",
    labels: [{ no: "Card No.", value: "001/003" }],
    skillsList: "HTML, CSS, Sass, JavaScript, Swiper, GSAP, webpack",
    siteUrl: "https://otowebdev.com/caresend/",
    role: "コーディング",
    username: "demo",
    password: "demo01",
    summary:
      "こちらのサイトには、BASIC認証をかけています。お手数ですが、サイトのアクセス時には、ユーザーネームに「demo」、パスワードに「demo01」の入力をお願いいたします。",
    viewTransitionName: "view-transition-title-work-1",
    viewTransitionImage: "view-transition-img-work-1",
  },
  {
    id: 2,
    image: "/images/works/work-2.jpg",
    workTitle:
      "青牡丹工務店｜大阪市北区の住宅建築・リフォーム・公共事業なら青牡丹工務店",
    description:
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の建築会社のサイト」になります。",
    labels: [{ no: "Card No.", value: "002/003" }],
    skillsList: "HTML, CSS, Sass, JavaScript, Swiper, GSAP, webpack",
    siteUrl: "https://otowebdev.com/aobotan/",
    role: "コーディング",
    username: "demo",
    password: "demo02",
    summary:
      "こちらのサイトには、BASIC認証をかけています。お手数ですが、サイトのアクセス時には、ユーザーネームに「demo」、パスワードに「demo02」の入力をお願いいたします。",
    viewTransitionName: "view-transition-title-work-2",
    viewTransitionImage: "view-transition-img-work-2",
  },
  {
    id: 3,
    image: "/images/works/work-3.jpg",
    workTitle: "採用特設サイト｜株式会社TETOTE",
    description:
      "こちらのサイトは、Figmaで作成されたWordPressオリジナルテーマのデザインカンプを基にコーディングを行った「架空のITコンサルファームの採用サイト」になります。",
    labels: [{ no: "Card No.", value: "003/003" }],
    skillsList:
      "HTML, CSS, Sass, JavaScript, PHP, WordPress, Swiper, GSAP, webpack",
    siteUrl: "https://otowebdev.com/tetote/",
    role: "コーディング",
    username: "demo",
    password: "demo03",
    summary:
      "こちらのサイトには、BASIC認証をかけています。お手数ですが、サイトのアクセス時には、ユーザーネームに「demo」、パスワードに「demo03」の入力をお願いいたします。",
    viewTransitionName: "view-transition-title-work-3",
    viewTransitionImage: "view-transition-img-work-3",
  },
];

const Works = () => {
  return (
    <>
      <section className={styles["works-section"]}>
        <TitleAnimation title={worksTitle} />
        <WorkCardGrid />
      </section>
    </>
  );
};

export default Works;
