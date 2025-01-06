import React from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";

interface SkillsBreadcrumbProps {
  skillsTitle: string;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};