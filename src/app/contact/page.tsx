import React from 'react';
import { Metadata } from 'next';
import Contact from '@/app/contact/components/Contact/Contact';

export const metadata: Metadata = {
  title: "Contact",
  description: "このページは、お問い合わせページになります。",
};

export default function ContactPage() {
  return (
    <div className="common-container">
      <Contact />
    </div>
  );
}