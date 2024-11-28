import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";

export const metadata: Metadata = {
  title: "blue walker｜Creative Web Developer",
  description: "Kaishu Aoyamaのポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className={`mx-auto max-w-screen-xl`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
