import React from "react";
import SkillsCardList from "@/app/features/skills/components/SkillsCardList/SkillsCardList";
import styles from "./Skills.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import { Link } from 'next-view-transitions'

export const skillsTitle = "My Skills List";

interface SkillsData {
  id: number;
  skillTitle: string;
  skillLink: string;
  description: string;
  skillLogo: string;
  label: string;
  link: string;
  viewTransitionName: string;
  viewTransitionImage: string;
  viewTransitionBg: string;
}

export const skillsData: SkillsData[] = [
  {
    id: 1,
    skillTitle: "HTML",
    skillLink: "html",
    description: "セマンティクスに考慮したマークアップを心がけています。",
    skillLogo: "/images/skills/html-logo.svg",
    label: "MARKUP",
    link: "https://developer.mozilla.org/ja/docs/Web/HTML",
    viewTransitionName: "view-transition-title-html",
    viewTransitionImage: "view-transition-img-html",
    viewTransitionBg: "view-transition-bg-html"
  },
  {
    id: 2,
    skillTitle: "CSS",
    skillLink: "css",
    description: "余白やフォントサイズなどのデザインカンプを忠実に再現するコーディングを心がけています。",
    skillLogo: "/images/skills/css-logo.svg",
    label: "STYLE",
    link: "https://developer.mozilla.org/ja/docs/Web/CSS",
    viewTransitionName: "view-transition-title-css",
    viewTransitionImage: "view-transition-img-css",
    viewTransitionBg: "view-transition-bg-css"
  },
  {
    id: 3,
    skillTitle: "Sass",
    skillLink: "sass",
    description: "CSSのメタ言語であり、CSSの記述を効率的に行うことができます。",
    skillLogo: "/images/skills/sass-logo.svg",
    label: "STYLE",
    link: "https://sass-lang.com/",
    viewTransitionName: "view-transition-title-sass",
    viewTransitionImage: "view-transition-img-sass",
    viewTransitionBg: "view-transition-bg-sass"
  },
  {
    id: 4,
    skillTitle: "JavaScript",
    skillLink: "javascript",
    description: "生のJavaScriptを使用することは今では少ないですが、ハンバーガーメニューやスライダー、アコーディオンなどは生のJavaScriptでの実装経験があります。",
    skillLogo: "/images/skills/javascript-logo.svg",
    label: "PROGRAMMING",
    link: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
    viewTransitionName: "view-transition-title-javascript",
    viewTransitionImage: "view-transition-img-javascript",
    viewTransitionBg: "view-transition-bg-javascript"
  },
  {
    id: 5,
    skillTitle: "TypeScript",
    skillLink: "typescript",
    description: "JavaScriptのスーパーセットであり、静的型付けを導入することでエラーを早期に発見できるようになります。",
    skillLogo: "/images/skills/ts-logo.svg",
    label: "PROGRAMMING",
    link: "https://www.typescriptlang.org/",
    viewTransitionName: "view-transition-title-typescript",
    viewTransitionImage: "view-transition-img-typescript",
    viewTransitionBg: "view-transition-bg-typescript"
  },
  {
    id: 6,
    skillTitle: "PHP",
    skillLink: "php",
    description: "ウェブサイトのバックエンドを作成するためのプログラミング言語です。",
    skillLogo: "/images/skills/php-logo.png",
    label: "PROGRAMMING",
    link: "https://www.php.net/",
    viewTransitionName: "view-transition-title-php",
    viewTransitionImage: "view-transition-img-php",
    viewTransitionBg: "view-transition-bg-php"
  },
  {
    id: 7,
    skillTitle: "WordPress",
    skillLink: "wordpress",
    description: "ウェブサイトのバックエンドを作成するためのプログラミング言語です。",
    skillLogo: "/images/skills/wordpress-logo-white.png",
    label: "CMS",
    link: "https://ja.wordpress.org/",
    viewTransitionName: "view-transition-title-wordpress",
    viewTransitionImage: "view-transition-img-wordpress",
    viewTransitionBg: "view-transition-bg-wordpress"
  },
  {
    id: 8,
    skillTitle: "React",
    skillLink: "react",
    description: "ウェブサイトのフロントエンドを作成するためのJavaScriptライブラリです。",
    skillLogo: "/images/skills/react-logo.svg",
    label: "LIBRARY",
    link: "https://ja.react.dev/",
    viewTransitionName: "view-transition-title-react",
    viewTransitionImage: "view-transition-img-react",
    viewTransitionBg: "view-transition-bg-react"
  },
  {
    id: 9,
    skillTitle: "Next.js",
    skillLink: "nextjs",
    description: "ウェブサイトのフロントエンドを作成するためのJavaScriptライブラリです。",
    skillLogo: "/images/skills/nextjs-logo.svg",
    label: "FRAMEWORK",
    link: "https://nextjs.org/",
    viewTransitionName: "view-transition-title-nextjs",
    viewTransitionImage: "view-transition-img-nextjs",
    viewTransitionBg: "view-transition-bg-nextjs"
  },
  {
    id: 10,
    skillTitle: "Astro",
    skillLink: "astro",
    description: "ウェブサイトのフロントエンドを作成するためのJavaScriptライブラリです。",
    skillLogo: "/images/skills/astro-icon-light-gradient.svg",
    label: "FRAMEWORK",
    link: "https://astro.build/",
    viewTransitionName: "view-transition-title-astro",
    viewTransitionImage: "view-transition-img-astro",
    viewTransitionBg: "view-transition-bg-astro"
  },
  {
    id: 11,
    skillTitle: "Tailwind CSS",
    skillLink: "tailwindcss",
    description: "CSSのフレームワークであり、クラスベースのスタイリングを行うことができます。",
    skillLogo: "/images/skills/tailwind-css-logo.svg",
    label: "FRAMEWORK",
    link: "https://tailwindcss.com/",
    viewTransitionName: "view-transition-title-tailwindcss",
    viewTransitionImage: "view-transition-img-tailwindcss",
    viewTransitionBg: "view-transition-bg-tailwindcss"
  },
  {
    id: 12,
    skillTitle: "GSAP",
    skillLink: "gsap",
    description: "JavaScriptのライブラリであり、アニメーションを効率的に作成できます。",
    skillLogo: "/images/skills/gsap-greensock-logo.svg",
    label: "LIBRARY",
    link: "https://gsap.com/",
    viewTransitionName: "view-transition-title-gsap",
    viewTransitionImage: "view-transition-img-gsap",
    viewTransitionBg: "view-transition-bg-gsap"
  },
  {
    id: 13,
    skillTitle: "Three.js",
    skillLink: "threejs",
    description: "JavaScriptのライブラリであり、3Dオブジェクトを作成できます。",
    skillLogo: "/images/skills/threejs-logo.svg",
    label: "LIBRARY",
    link: "https://threejs.org/",
    viewTransitionName: "view-transition-title-threejs",
    viewTransitionImage: "view-transition-img-threejs",
    viewTransitionBg: "view-transition-bg-threejs"
  },
  {
    id: 14,
    skillTitle: "React Hook Form",
    skillLink: "react-hook-form",
    description: "Reactのライブラリであり、フォームのバリデーションを効率的に行うことができます。",
    skillLogo: "/images/skills/react-hook-form-logo.svg",
    label: "LIBRARY",
    link: "https://react-hook-form.com/",
    viewTransitionName: "view-transition-title-react-hook-form",
    viewTransitionImage: "view-transition-img-react-hook-form",
    viewTransitionBg: "view-transition-bg-react-hook-form"
  },
  {
    id: 15,
    skillTitle: "Zod",
    skillLink: "zod",
    description: "Reactのライブラリであり、フォームのバリデーションを効率的に行うことができます。",
    skillLogo: "/images/skills/zod-logo.svg",
    label: "LIBRARY",
    link: "https://zod.dev/",
    viewTransitionName: "view-transition-title-zod",
    viewTransitionImage: "view-transition-img-zod",
    viewTransitionBg: "view-transition-bg-zod"
  },
  {
    id: 16,
    skillTitle: "webpack",
    skillLink: "webpack",
    description: "JavaScriptのモジュールバンドラーであり、ファイルの依存関係を解析してバンドルすることができます。",
    skillLogo: "/images/skills/webpack-logo.svg",
    label: "MODULE BUNDLER",
    link: "https://webpack.js.org/",
    viewTransitionName: "view-transition-title-webpack",
    viewTransitionImage: "view-transition-img-webpack",
    viewTransitionBg: "view-transition-bg-webpack"
  },
  {
    id: 17,
    skillTitle: "Git",
    skillLink: "git",
    description: "バージョン管理システムであり、ファイルの変更履歴を追跡できます。",
    skillLogo: "/images/skills/git-logo.svg",
    label: "VERSION CONTROL",
    link: "https://git-scm.com/",
    viewTransitionName: "view-transition-title-git",
    viewTransitionImage: "view-transition-img-git",
    viewTransitionBg: "view-transition-bg-git"
  },
  {
    id: 18,
    skillTitle: "Adobe Premiere Pro",
    skillLink: "adobe-premiere-pro",
    description: "ビデオ編集ソフトウェアであり、ビデオの編集やエフェクトを追加できます。",
    skillLogo: "/images/skills/adobe-premiere-pro-logo.svg",
    label: "VIDEO EDITING",
    link: "https://www.adobe.com/jp/products/premiere.html",
    viewTransitionName: "view-transition-title-adobe-premiere-pro",
    viewTransitionImage: "view-transition-img-adobe-premiere-pro",
    viewTransitionBg: "view-transition-bg-adobe-premiere-pro"
  },
];

const Skills = () => {
  return (
    <>
      <section className={styles["skills-section"]}>
        <TitleAnimation title={skillsTitle} />
        <SkillsCardList />
      </section>
    </>
  );
};

export default Skills;
