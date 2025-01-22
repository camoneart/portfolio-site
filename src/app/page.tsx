"use client";

import React, { useState } from "react";
import LoadingScreen from "./components/elements/LoadingScreen/LoadingScreen";
import ElegantFloatingCubes from "./components/3D/Cube/ElegantFloatingCubes";
import Hero from "./components/layouts/Hero/Hero";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <LoadingScreen
          onLoadingComplete={handleLoadingComplete}
        />
      )}
      <div className="absolute inset-0 z-10 h-full w-full">
        <ElegantFloatingCubes />
      </div>
      <Hero />
    </>
  );
}
