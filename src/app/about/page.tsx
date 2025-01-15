import React from "react";
import About from "./components/About/About";
import { Metadata } from "next";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";

export const metadata: Metadata = {
  title: "About",
  description: "このページでは、Kaishu Aoyamaのプロフィール、趣味、ビジョンについてご紹介いたします。",
};

const AboutPage = () => {
  return (
    <>
      <div className="common-container">
        <StairsTransition>
          <About />
        </StairsTransition>
      </div>
    </>
  );
};

export default AboutPage;
