import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import NetworkBackground from "./components/3D/BackGround/NetworkBackground";
import { Russo_One } from 'next/font/google'

const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-russo-one',
})

export const metadata: Metadata = {
  title: {
    default: "Aoyama｜Creative Web Developer",
    template: "%s｜Aoyama"
  },
  description: "Kaishu Aoyamaのポートフォリオサイトです。",
  robots: "noindex, nofollow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${russoOne.variable}`}>
      <body>
        <NetworkBackground />
        <Header />
        <main className={`mx-auto max-w-screen-xl`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}