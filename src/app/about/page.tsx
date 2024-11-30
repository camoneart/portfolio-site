import React from 'react'
import About from './components/About/About'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
  description: "このページでは、Kaishu Aoyamaのプロフィールや経歴についてご紹介いたします。",
};

const AboutPage = () => {
  return (
    <About />
  )
}

export default AboutPage;
