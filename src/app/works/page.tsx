import React from "react";
import Works from "./components/Works/Works";
import { Metadata } from 'next';
import Stairs from "../components/Animation/StairsTransition/Stairs";

export const metadata: Metadata = {
  title: "Works",
  description: "このページでは、Kaishu Aoyamaの実績・制作物の一覧をご紹介いたします。",
};

const WorksPage = () => {
  return (
    <>
      <div className="common-container">
        <Stairs mode="wait">
          <Works />
        </Stairs>
      </div>
    </>
  );
};

export default WorksPage;
