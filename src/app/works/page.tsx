import React from "react";
import Works from "./components/Works/Works";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Works",
  description: "このページでは、Kaishu Aoyamaの実績・制作物の一覧をご紹介いたします。",
};

const WorksPage = () => {
  return (
    <>
      <div className="font-russo common-container">
        <Works />
      </div>
    </>
  );
};

export default WorksPage;
