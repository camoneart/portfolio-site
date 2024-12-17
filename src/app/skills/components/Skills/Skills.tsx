import React from "react";
import SkillsCardList from "@/app/features/skills/components/SkillsCardList/SkillsCardList";
import styles from "./Skills.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";

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
  viewTransitionLabel: string;
  viewTransitionLogoWrapper: string;
  viewTransitionLogoBg: string;
}

export const skillsData: SkillsData[] = [
  {
    id: 1,
    skillTitle: "HTML",
    skillLink: "html",
    description: "HTMLの基本を理解し、セマンティクスを考慮したマークアップを心がけています。適切なタグの選択やアクセシビリティに配慮した実装ができ、実際に制作したサイトのコーディング時にはSEOを意識したマークアップ構造の設計を行いました。また、レスポンシブデザインに対応したマークアップ経験もあります。",
    skillLogo: "/images/skills/html-logo.svg",
    label: "MARKUP",
    link: "https://developer.mozilla.org/ja/docs/Web/HTML",
    viewTransitionName: "view-transition-title-html",
    viewTransitionImage: "view-transition-img-html",
    viewTransitionBg: "view-transition-bg-html",
    viewTransitionLabel: "view-transition-label-html",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-html",
    viewTransitionLogoBg: "view-transition-logo-bg-html"
  },
  {
    id: 2,
    skillTitle: "CSS",
    skillLink: "css",
    description: "良いCSSとされる「予測できる」「再利用性」「保守性」「拡張性」を意識し、デザインカンプを忠実に再現するコーディングを心がけています。重複して使用する値がある場合はCSS変数を利用して1か所で定義することで、再利用性を高めています。ピュアなCSSでコーディングする際にはクラス名は主にBEM記法を採用し、コーディングを行っています。",
    skillLogo: "/images/skills/css-logo.svg",
    label: "STYLE",
    link: "https://developer.mozilla.org/ja/docs/Web/CSS",
    viewTransitionName: "view-transition-title-css",
    viewTransitionImage: "view-transition-img-css",
    viewTransitionBg: "view-transition-bg-css",
    viewTransitionLabel: "view-transition-label-css",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-css",
    viewTransitionLogoBg: "view-transition-logo-bg-css"
  },
  {
    id: 3,
    skillTitle: "Sass",
    skillLink: "sass",
    description: "SCSS記法を使用したSassが書けます。ファイルを役割ごとに分割するためにパーシャル化し、メンテナンス性・可読性に配慮したコーディングを行います。",
    skillLogo: "/images/skills/sass-logo.svg",
    label: "STYLE",
    link: "https://sass-lang.com/",
    viewTransitionName: "view-transition-title-sass",
    viewTransitionImage: "view-transition-img-sass",
    viewTransitionBg: "view-transition-bg-sass",
    viewTransitionLabel: "view-transition-label-sass",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-sass",
    viewTransitionLogoBg: "view-transition-logo-bg-sass"
  },
  {
    id: 4,
    skillTitle: "JavaScript",
    skillLink: "javascript",
    description: "「ハンバーガーメニュー」「スライダー」「アコーディオン」「モーダルウィンドウ」「ドロワーメニュー」「ローディング画面」などのUIパーツの実装経験があります。",
    skillLogo: "/images/skills/javascript-logo.svg",
    label: "PROGRAMMING",
    link: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
    viewTransitionName: "view-transition-title-javascript",
    viewTransitionImage: "view-transition-img-javascript",
    viewTransitionBg: "view-transition-bg-javascript",
    viewTransitionLabel: "view-transition-label-javascript",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-javascript",
    viewTransitionLogoBg: "view-transition-logo-bg-javascript"
  },
  {
    id: 5,
    skillTitle: "TypeScript",
    skillLink: "typescript",
    description: "基本的な型システム「型アノテーション」「interface」「type」や、コードの共通化と型の安全性を両立するための言語機能であるジェネリクスなどを使用した型定義ができます。",
    skillLogo: "/images/skills/ts-logo.svg",
    label: "PROGRAMMING",
    link: "https://www.typescriptlang.org/",
    viewTransitionName: "view-transition-title-typescript",
    viewTransitionImage: "view-transition-img-typescript",
    viewTransitionBg: "view-transition-bg-typescript",
    viewTransitionLabel: "view-transition-label-typescript",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-typescript",
    viewTransitionLogoBg: "view-transition-logo-bg-typescript"
  },
  {
    id: 6,
    skillTitle: "PHP",
    skillLink: "php",
    description: "WordPress化に必要なPHPの基礎知識を持ち、テンプレートタグやループ処理、カスタム投稿タイプの作成などのWordPress特有のPHP実装経験があります。",
    skillLogo: "/images/skills/php-logo.png",
    label: "PROGRAMMING",
    link: "https://www.php.net/",
    viewTransitionName: "view-transition-title-php",
    viewTransitionImage: "view-transition-img-php",
    viewTransitionBg: "view-transition-bg-php",
    viewTransitionLabel: "view-transition-label-php",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-php",
    viewTransitionLogoBg: "view-transition-logo-bg-php"
  },
  {
    id: 7,
    skillTitle: "WordPress",
    skillLink: "wordpress",
    description: "WordPressオリジナルテーマのデザインカンプを基にしたコーディング経験があります。「カスタム投稿タイプ」「カスタムタクソノミー」「カスタムフィールド」など。クライアント様の更新コストを低減する実装を行うことができます。",
    skillLogo: "/images/skills/wordpress-logo-white.png",
    label: "CMS",
    link: "https://ja.wordpress.org/",
    viewTransitionName: "view-transition-title-wordpress",
    viewTransitionImage: "view-transition-img-wordpress",
    viewTransitionBg: "view-transition-bg-wordpress",
    viewTransitionLabel: "view-transition-label-wordpress",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-wordpress",
    viewTransitionLogoBg: "view-transition-logo-bg-wordpress"
  },
  {
    id: 8,
    skillTitle: "React",
    skillLink: "react",
    description: "コンポーネント設計、React Hooksを使用した状態管理、RSCの理解、UIライブラリの活用などができます。このポートフォリオサイトの実装にもNext.jsと組み合わせてReactを採用しました。パフォーマンスと保守性を考慮した実装が可能です。",
    skillLogo: "/images/skills/react-logo.svg",
    label: "LIBRARY",
    link: "https://ja.react.dev/",
    viewTransitionName: "view-transition-title-react",
    viewTransitionImage: "view-transition-img-react",
    viewTransitionBg: "view-transition-bg-react",
    viewTransitionLabel: "view-transition-label-react",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-react",
    viewTransitionLogoBg: "view-transition-logo-bg-react"
  },
  {
    id: 9,
    skillTitle: "Next.js",
    skillLink: "nextjs",
    description: "Next.jsの主要な機能を理解しています。App RouterやServer Componentsなどを活用でき、CSR/SSG/SSR/ISR/RSCなどの適切なレンダリング方式の選択とパフォーマンスを考慮した実装を心がけます。このポートフォリオサイトでもNext.jsを採用し、React、TypeScriptやTailwind CSSと組み合わせて実装しております。",
    skillLogo: "/images/skills/nextjs-logo.svg",
    label: "FRAMEWORK",
    link: "https://nextjs.org/",
    viewTransitionName: "view-transition-title-nextjs",
    viewTransitionImage: "view-transition-img-nextjs",
    viewTransitionBg: "view-transition-bg-nextjs",
    viewTransitionLabel: "view-transition-label-nextjs",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-nextjs",
    viewTransitionLogoBg: "view-transition-logo-bg-nextjs"
  },
  {
    id: 10,
    skillTitle: "Astro",
    skillLink: "astro",
    description: "コンテンツフォーカスの高速なWebサイト構築に特化したAstroの理解があります。「アイランドアーキテクチャ」「サーバーファースト」「デフォルトでゼロJS」「コンテンツコレクション」などの主要な機能を理解しています。デプロイはしておりませんが、現在Astroを採用した個人ブログサイトを実装しながら学習を続けております。",
    skillLogo: "/images/skills/astro-icon-light-gradient.svg",
    label: "FRAMEWORK",
    link: "https://astro.build/",
    viewTransitionName: "view-transition-title-astro",
    viewTransitionImage: "view-transition-img-astro",
    viewTransitionBg: "view-transition-bg-astro",
    viewTransitionLabel: "view-transition-label-astro",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-astro",
    viewTransitionLogoBg: "view-transition-logo-bg-astro"
  },
  {
    id: 11,
    skillTitle: "Tailwind CSS",
    skillLink: "tailwindcss",
    description: "Tailwind CSSの基本概念を理解し、ユーティリティファーストの考え方に基づいたスタイリング経験があります。このポートフォリオサイトでも、いくつかのコンポーネントにTailwind CSSを活用してUI構築を行っております。",
    skillLogo: "/images/skills/tailwind-css-logo.svg",
    label: "FRAMEWORK",
    link: "https://tailwindcss.com/",
    viewTransitionName: "view-transition-title-tailwindcss",
    viewTransitionImage: "view-transition-img-tailwindcss",
    viewTransitionBg: "view-transition-bg-tailwindcss",
    viewTransitionLabel: "view-transition-label-tailwindcss",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-tailwindcss",
    viewTransitionLogoBg: "view-transition-logo-bg-tailwindcss"
  },
  {
    id: 12,
    skillTitle: "GSAP",
    skillLink: "gsap",
    description: "トゥイーンアニメーションを活用し、スムーズでインタラクティブなアニメーションの実装経験があります。このポートフォリオサイトでもGSAPを活用してアニメーションを実装しております。リッチコンテンツなWebサイトを実装するためにWebアニメーションへの理解を深めたいと思っており、Three.jsなどの3Dコンテンツを制作できるライブラリの学習と並行して、GSAPの学習を継続しています。",
    skillLogo: "/images/skills/gsap-greensock-logo.svg",
    label: "LIBRARY",
    link: "https://gsap.com/",
    viewTransitionName: "view-transition-title-gsap",
    viewTransitionImage: "view-transition-img-gsap",
    viewTransitionBg: "view-transition-bg-gsap",
    viewTransitionLabel: "view-transition-label-gsap",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-gsap",
    viewTransitionLogoBg: "view-transition-logo-bg-gsap"
  },
  {
    id: 13,
    skillTitle: "Three.js",
    skillLink: "threejs",
    description: "「Scene」「Object（Mesh）」「Camera」「Renderer」などの主要な概念を学び、実際にこのポートフォリオサイトのファーストビューで表示させている3Dモデルを、Three.jsのラッパーライブラリである「React Three Fiber」を使用して実装いたしました。",
    skillLogo: "/images/skills/threejs-logo.svg",
    label: "LIBRARY",
    link: "https://threejs.org/",
    viewTransitionName: "view-transition-title-threejs",
    viewTransitionImage: "view-transition-img-threejs",
    viewTransitionBg: "view-transition-bg-threejs",
    viewTransitionLabel: "view-transition-label-threejs",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-threejs",
    viewTransitionLogoBg: "view-transition-logo-bg-threejs"
  },
  {
    id: 14,
    skillTitle: "React Hook Form",
    skillLink: "react-hook-form",
    description: "このポートフォリオサイトのお問い合わせフォームではReact Hook Formを使用し、「フォームの入力値の状態管理」「送信処理の制御」「エラー表示の管理」など、フォームのパフォーマンス化を行いました。",
    skillLogo: "/images/skills/react-hook-form-logo.svg",
    label: "LIBRARY",
    link: "https://react-hook-form.com/",
    viewTransitionName: "view-transition-title-react-hook-form",
    viewTransitionImage: "view-transition-img-react-hook-form",
    viewTransitionBg: "view-transition-bg-react-hook-form",
    viewTransitionLabel: "view-transition-label-react-hook-form",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-react-hook-form",
    viewTransitionLogoBg: "view-transition-logo-bg-react-hook-form"
  },
  {
    id: 15,
    skillTitle: "Zod",
    skillLink: "zod",
    description: "このポートフォリオサイトのお問い合わせフォームでは、入力値の検証（バリデーション）にZodを使用しました。Zodを使用したスキーマバリデーションを行うことで型安全性が高いバリデーションを実現し、React Hook Formと組み合わせて堅牢なフォームを実装しました。",
    skillLogo: "/images/skills/zod-logo.svg",
    label: "LIBRARY",
    link: "https://zod.dev/",
    viewTransitionName: "view-transition-title-zod",
    viewTransitionImage: "view-transition-img-zod",
    viewTransitionBg: "view-transition-bg-zod",
    viewTransitionLabel: "view-transition-label-zod",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-zod",
    viewTransitionLogoBg: "view-transition-logo-bg-zod"
  },
  {
    id: 16,
    skillTitle: "webpack",
    skillLink: "webpack",
    description: "Works Listに搭載してあるサイトの実装時には、モジュールバンドラのwebpackを使用し、モジュールをバンドル（まとめる）することで、ブラウザからのリクエスト数を減らし、ファイル転送の効率化を行いました。",
    skillLogo: "/images/skills/webpack-logo.svg",
    label: "MODULE BUNDLER",
    link: "https://webpack.js.org/",
    viewTransitionName: "view-transition-title-webpack",
    viewTransitionImage: "view-transition-img-webpack",
    viewTransitionBg: "view-transition-bg-webpack",
    viewTransitionLabel: "view-transition-label-webpack",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-webpack",
    viewTransitionLogoBg: "view-transition-logo-bg-webpack"
  },
  {
    id: 17,
    skillTitle: "Git",
    skillLink: "git",
    description: "Gitの基本的なコマンドを理解しています。普段はGitHubでリモートリポジトリとローカルリポジトリを連携し「git add」「git commit」「git push」などのコマンドを使用してファイルのバージョン管理や、変更履歴の追跡を行っています。",
    skillLogo: "/images/skills/git-logo.svg",
    label: "VERSION CONTROL",
    link: "https://git-scm.com/",
    viewTransitionName: "view-transition-title-git",
    viewTransitionImage: "view-transition-img-git",
    viewTransitionBg: "view-transition-bg-git",
    viewTransitionLabel: "view-transition-label-git",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-git",
    viewTransitionLogoBg: "view-transition-logo-bg-git"
  },
  {
    id: 18,
    skillTitle: "Adobe Premiere Pro",
    skillLink: "adobe-premiere-pro",
    description: "過去にPremiere Proを使用した動画編集の経験があります。「撮影」「カット」「テロップ」「BGM」などの基本的な操作方法は、全て独学で習得しました。",
    skillLogo: "/images/skills/adobe-premiere-pro-logo.svg",
    label: "VIDEO EDITING",
    link: "https://www.adobe.com/jp/products/premiere.html",
    viewTransitionName: "view-transition-title-adobe-premiere-pro",
    viewTransitionImage: "view-transition-img-adobe-premiere-pro",
    viewTransitionBg: "view-transition-bg-adobe-premiere-pro",
    viewTransitionLabel: "view-transition-label-adobe-premiere-pro",
    viewTransitionLogoWrapper: "view-transition-logo-wrapper-adobe-premiere-pro",
    viewTransitionLogoBg: "view-transition-logo-bg-adobe-premiere-pro"
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
