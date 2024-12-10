import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import NetworkBackground from "./components/3D/NetworkBackground/NetworkBackground";
import { Russo_One } from "next/font/google";
import { ViewTransitions } from 'next-view-transitions'

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-russo-one",
});

export const metadata: Metadata = {
  title: {
    default: "Aoyama｜Creative Web Developer",
    template: "%s｜Aoyama",
  },
  description: "Kaishu Aoyamaのポートフォリオサイトです。",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="ja" className={`${russoOne.variable}`}>
        <body>
          <NetworkBackground />
          <Header />
          <main className={`z-20`}>{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
