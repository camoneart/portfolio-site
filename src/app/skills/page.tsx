import React from "react";
import Skills from "./components/Skills/Skills";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Skills",
  description: "このページでは、Kaishu Aoyamaのスキル一覧をご紹介いたします。",
};

const SkillsPage = () => {
  return (
    <>
      <div className="font-russo common-container">
        <Skills />
      </div>
    </>
  );
};

export default SkillsPage;
