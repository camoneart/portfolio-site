import React from "react";
import * as About from "@/app/features/about/components/index";
import { Metadata } from "next";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";

export const metadata: Metadata = {
  title: "About",
  description:
    "このページでは、Kaishu Aoyamaのプロフィール、趣味、ビジョンについてご紹介いたします。",
};

const AboutPage = () => {
  return (
    <>
      <div className="common-container">
        <StairsTransition>
          <About.AboutSection />
        </StairsTransition>
      </div>
    </>
  );
};

export default AboutPage;
