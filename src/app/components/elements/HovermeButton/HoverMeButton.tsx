"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import styles from "./HoverMeButton.module.css";

const HoverMeButton = () => {
  const pathname = usePathname();

  const getHrefAndText = () => {
    if (pathname?.includes("/works/")) {
      return {
        href: "/works",
        text: "作品一覧に戻る",
      };
    } else if (pathname?.includes("/skills/")) {
      return {
        href: "/skills",
        text: "スキル一覧に戻る",
      };
    }
    return {
      href: "/works",
      text: "作品一覧に戻る",
    };
  };

  const { href, text } = getHrefAndText();

  return (
    <div className={styles["btn-bg"]}>
      <Link
        href={href}
        className={`group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-transparent py-1 pl-14 pr-7 font-bold text-white ${styles["btn-link"]}`}
      >
        <div className={`absolute left-1 inline-flex h-12 w-12 items-center justify-start rounded-full transition-[width] duration-300 linear group-hover:w-[calc(100%-8px)] ${styles["arrow-bg"]}`}>
          <div className={`ml-3.5 flex items-center justify-center`}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white rotate-180"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              ></path>
            </svg>
          </div>
        </div>
        <span className="z-10 pl-2">{text}</span>
      </Link>
    </div>
  );
}

export default HoverMeButton;