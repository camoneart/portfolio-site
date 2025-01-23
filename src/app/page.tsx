"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/elements/LoadingScreen/LoadingScreen";
import ElegantFloatingCubes from "./components/3D/Cube/ElegantFloatingCubes";
import Hero from "./components/layouts/Hero/Hero";

export default function Home() {
  // 初期状態は常にtrueに設定（サーバーサイドレンダリングと一致させる）
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // クライアントサイドでの初期化が完了したかどうかを追跡
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    // クライアントサイドでの初期化
    const hasVisited = sessionStorage.getItem("hasVisited");
    setIsLoading(!hasVisited);
    setIsInitialized(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  // 初期化が完了するまでは何も表示しない
  if (!isInitialized) {
    return null;
  }

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
