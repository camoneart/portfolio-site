import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import NetworkBackground from "./components/3D/BackGround/NetworkBackground";

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
    <html lang="ja">
      {/* <body className="relative inset-0 -z-10 h-full w-full bg-[radial-gradient(#2D2E2F_1px,transparent_1px)] [background-size:16px_16px]"> */}
      <body>
        <NetworkBackground />
        {/* <div className="absolute inset-0 z-10 h-full w-full">
          <ElegantFloatingCubes />
        </div> */}
        <Header />
        <main className={`mx-auto max-w-screen-xl`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}