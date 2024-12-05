import React from "react";
import styles from "./SkillsItemList.module.css";
import SkillsCard from "../SkillsCard/SkillsCard";

interface SkillItem {
  id: number;
  skillTitle: string;
  skillLogo: string;
  label: string;
  link: string;
}

export const skillsItemDate: SkillItem[] = [
  {
    id: 1,
    skillTitle: "HTML",
    skillLogo: "/images/skills/html-logo.svg",
    label: "MARKUP",
    link: "https://developer.mozilla.org/ja/docs/Web/HTML",
  },
  {
    id: 2,
    skillTitle: "CSS",
    skillLogo: "/images/skills/css-logo.svg",
    label: "STYLE",
    link: "https://developer.mozilla.org/ja/docs/Web/CSS",
  },
  {
    id: 3,
    skillTitle: "Sass",
    skillLogo: "/images/skills/sass-logo.svg",
    label: "STYLE",
    link: "https://sass-lang.com/",
  },
  {
    id: 4,
    skillTitle: "JavaScript",
    skillLogo: "/images/skills/javascript-logo.svg",
    label: "PROGRAMMING",
    link: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
  },
  {
    id: 6,
    skillTitle: "TypeScript",
    skillLogo: "/images/skills/ts-logo.svg",
    label: "PROGRAMMING",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 5,
    skillTitle: "PHP",
    skillLogo: "/images/skills/php-logo.png",
    label: "PROGRAMMING",
    link: "https://www.php.net/",
  },
  {
    id: 6,
    skillTitle: "WordPress",
    skillLogo: "/images/skills/wordpress-logo-white.png",
    label: "CMS",
    link: "https://ja.wordpress.org/",
  },
  {
    id: 7,
    skillTitle: "React",
    skillLogo: "/images/skills/react-logo.svg",
    label: "LIBRARY",
    link: "https://ja.react.dev/",
  },
  {
    id: 8,
    skillTitle: "Next.js",
    skillLogo: "/images/skills/nextjs-logo.svg",
    label: "FRAMEWORK",
    link: "https://nextjs.org/",
  },
  {
    id: 9,
    skillTitle: "Astro",
    skillLogo: "/images/skills/astro-icon-light-gradient.svg",
    label: "FRAMEWORK",
    link: "https://astro.build/",
  },
  {
    id: 10,
    skillTitle: "Tailwind CSS",
    skillLogo: "/images/skills/tailwind-css-logo.svg",
    label: "FRAMEWORK",
    link: "https://tailwindcss.com/",
  },
  {
    id: 13,
    skillTitle: "GSAP",
    skillLogo: "/images/skills/gsap-greensock-logo.svg",
    label: "LIBRARY",
    link: "https://gsap.com/",
  },
  {
    id: 14,
    skillTitle: "Three.js",
    skillLogo: "/images/skills/threejs-logo.svg",
    label: "LIBRARY",
    link: "https://threejs.org/",
  },
  {
    id: 11,
    skillTitle: "webpack",
    skillLogo: "/images/skills/webpack-logo.svg",
    label: "MODULE BUNDLER",
    link: "https://webpack.js.org/",
  },
  {
    id: 12,
    skillTitle: "Git",
    skillLogo: "/images/skills/git-logo.svg",
    label: "VERSION CONTROL",
    link: "https://git-scm.com/",
  },
  {
    id: 15,
    skillTitle: "Adobe Premiere Pro",
    skillLogo: "/images/skills/adobe-premiere-pro-logo.svg",
    label: "VIDEO EDITING",
    link: "https://www.adobe.com/jp/products/premiere.html",
  }
];

const SkillsItemList = () => {
  return (
    <>
      <div className={styles["skills-layout"]}>
        {skillsItemDate.map((skillItem) => (
          <SkillsCard key={skillItem.id} skillItem={skillItem} />
        ))}
      </div>
    </>
  )
};

export default SkillsItemList;

