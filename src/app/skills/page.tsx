import React from "react";
import Skills from "./components/Skills/Skills";
import { Metadata } from "next";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";

export const metadata: Metadata = {
  title: "Skills",
  description: "このページでは、Kaishu Aoyamaのスキル一覧をご紹介いたします。",
};

const SkillsPage = () => {
  return (
    <>
      <div className="common-container">
        <StairsTransition>
          <Skills />
        </StairsTransition>
      </div>
    </>
  );
};

export default SkillsPage;
