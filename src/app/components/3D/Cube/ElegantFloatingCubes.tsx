"use client";

import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

// カメラ設定を定数化して最適化
const CAMERA_CONFIG = {
  fov: 45,
  near: 0.01,
  far: 100,
} as const;

const ElegantFloatingCubes = memo(() => {
  return (
    <Canvas
      shadows
      camera={CAMERA_CONFIG}
      dpr={[1, 2]} // デバイスピクセル比の最適化
      performance={{ min: 0.5 }} // パフォーマンス設定の追加
    >
      <Scene />
    </Canvas>
  );
});

ElegantFloatingCubes.displayName = "ElegantFloatingCubes";

export default ElegantFloatingCubes;
