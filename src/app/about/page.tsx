import React from 'react'
import About from './components/About/About'
import { Metadata } from 'next';
import Stairs from "../components/Animation/StairsTransition/Stairs";

export const metadata: Metadata = {
  title: "About",
  description: "このページでは、Kaishu Aoyamaのプロフィールや経歴についてご紹介いたします。",
};

const AboutPage = () => {
  return (
    <>
      <div className="common-container">
        <Stairs mode="wait">
          <About />
        </Stairs>
      </div>
    </>
  )
}

export default AboutPage;
