import React from "react";
import Works from "./components/Works/Works";
import { Metadata } from "next";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";

export const metadata: Metadata = {
  title: "Works",
  description: "このページでは、Kaishu Aoyamaの制作実績をご紹介いたします。",
};

const WorksPage = () => {
  return (
    <>
      <div className="common-container">
        <StairsTransition>
          <Works />
        </StairsTransition>
      </div>
    </>
  );
};

export default WorksPage;
