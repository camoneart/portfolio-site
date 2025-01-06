import React from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";

interface WorksDetailBreadcrumbProps {
  workTitle: string;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};