"use client";

import { useState } from "react";
import { useClientSnapshot } from "@/lib/useClientSnapshot";
import LoadingScreen from "./components/elements/LoadingScreen/LoadingScreen";
import ElegantFloatingCubes from "./components/3D/Cube/ElegantFloatingCubes";
import Hero from "./components/layouts/Hero/Hero";

export default function Home() {
  // サーバーと初回ハイドレーションでは false (=ローディング表示)、
  // ハイドレーション後にクライアントの sessionStorage を読む。
  const hasVisited = useClientSnapshot(() => sessionStorage.getItem("hasVisited") !== null, false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const isLoading = !hasVisited && !loadingComplete;

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className="absolute inset-0 z-10 h-full w-full">
        <ElegantFloatingCubes />
      </div>
      <Hero />
    </>
  );
}
