import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import NetworkBackground from "./components/3D/NetworkBackground/NetworkBackground";
import { Russo_One } from "next/font/google";
import { ViewTransitions } from 'next-view-transitions'
import { ControlViewport } from "./components/layouts/ControlViewport/ControlViewport";
import MouseStalker from "./components/MouseStalker/MouseStalker";
import { AnimatePresence } from "motion/react"

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-russo-one",
});

export const metadata: Metadata = {
  title: {
    default: "Aoyama｜Creative Web Engineer",
    template: "%s｜Aoyama",
  },
  description: "Kaishu Aoyamaのポートフォリオサイトです。Web制作を通して「モノとの対話」を表現できるエンジニアを目指しています。",
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
          <MouseStalker />
          <ControlViewport />
          <NetworkBackground />
          {/* <AnimatePresence mode="wait"> */}
            <Header />
            <main>{children}</main>
            <Footer />
          {/* </AnimatePresence> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
