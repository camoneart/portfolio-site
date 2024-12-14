import React from "react";
import WorkCardGrid from "@/app/features/work/components/WorkCardList/WorkCardList";
import styles from "./Works.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";


export const worksTitle = "My Works List";

interface WorksData {
  id: number;
  icon: React.ReactNode;
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
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
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
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の介護派遣サービスのLPサイト」になります。",
    viewTransitionName: "view-transition-title-work-1",
    viewTransitionImage: "view-transition-img-work-1",
  },
  {
    id: 2,
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
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
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の建築会社のサイト」になります。",
    viewTransitionName: "view-transition-title-work-2",
    viewTransitionImage: "view-transition-img-work-2",
  },
  {
    id: 3,
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
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
      "こちらのサイトは、Figmaで作成されたWordPressオリジナルテーマのデザインカンプを基にコーディングを行った「架空のITコンサルファームの採用サイト」になります。",
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
