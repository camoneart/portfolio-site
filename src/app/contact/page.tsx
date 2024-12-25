import React from 'react';
import { Metadata } from 'next';
import Contact from '@/app/contact/components/Contact/Contact';
import Stairs from "../components/Animation/StairsTransition/Stairs";

export const metadata: Metadata = {
  title: "Contact",
  description: "このページは、お問い合わせページになります。",
};

export default function ContactPage() {
  return (
    <>
      <div className="common-container">
        <Stairs mode="wait">
          <Contact />
        </Stairs>
      </div>
    </>
  );
}