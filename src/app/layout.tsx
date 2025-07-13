import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/layouts/Header/Header";
import Footer from "@/app/components/layouts/Footer/Footer";
import NetworkBackground from "./components/3D/NetworkBackground/NetworkBackground";
import { Russo_One } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ControlViewport } from "./components/layouts/ControlViewport/ControlViewport";
import MouseStalker from "./components/MouseStalker/MouseStalker";

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-russo-one",
});

export const metadata: Metadata = {
  title: {
    default: "aoyama｜Creative Developer",
    template: "%s｜aoyama",
  },
  description:
    "Kaishu Aoyamaのポートフォリオサイトです。モノづくりを通して、ワクワクしたり心踊るような体験を提供したいです。",
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
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
