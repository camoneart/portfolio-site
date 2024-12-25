import React from "react";
import Skills from "./components/Skills/Skills";
import { Metadata } from 'next';
import Stairs from "../components/Animation/StairsTransition/Stairs";

export const metadata: Metadata = {
  title: "Skills",
  description: "このページでは、Kaishu Aoyamaのスキル一覧をご紹介いたします。",
};

const SkillsPage = () => {
  return (
    <>
      <div className="common-container">
        <Stairs mode="wait">
          <Skills />
        </Stairs>
      </div>
    </>
  );
};

export default SkillsPage;
