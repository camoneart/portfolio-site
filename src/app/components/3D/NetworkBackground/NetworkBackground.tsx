"use client";

import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { createPointsSystem } from "./helpers";
import styles from "./NetworkBackground.module.css";
gsap.registerPlugin(CustomEase, useGSAP);

CustomEase.create(
  "custom",
  "M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1.001 1,1"
);

const GRID_CONFIG = {
  gridSize: 100,
  spacing: 1.5,
};

// アクティブポイントの数を定義
const ACTIVE_POINTS_COUNT = 1000;

function Points() {
  const pointsRef = useRef<THREE.Points>(null);
  const { camera } = useThree();
  const activePointsRef = useRef<Set<number>>(new Set());
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const { geometry, points, positions } = useMemo(
    () => createPointsSystem(GRID_CONFIG),
    []
  );

  // 初期のアクティブポイントをランダムに生成する関数
  const generateInitialActivePoints = useCallback(() => {
    const totalPoints = positions.length / 3;
    const activePoints = new Set<number>();

    while (activePoints.size < ACTIVE_POINTS_COUNT) {
      const randomIndex = Math.floor(Math.random() * totalPoints);
      activePoints.add(randomIndex);
    }

    return activePoints;
  }, [positions.length]);

  // バッチアニメーション処理の実装
  const animatePoints = useCallback(() => {
    if (!geometry) return;

    const scaleAttribute = geometry.attributes.scale;
    const timeline = gsap.timeline();

    // 全アクティブポイントを一括でアニメーション
    timeline
      .to(
        {},
        {
          duration: 4,
          ease: "custom",
          onUpdate: function () {
            const progress = this.progress();
            activePointsRef.current.forEach((index) => {
              scaleAttribute.array[index] = 1 + progress;
            });
            scaleAttribute.needsUpdate = true;
          },
        }
      )
      .to(
        {},
        {
          duration: 4,
          ease: "custom",
          onUpdate: function () {
            const progress = this.progress();
            activePointsRef.current.forEach((index) => {
              scaleAttribute.array[index] = 2 - progress;
            });
            scaleAttribute.needsUpdate = true;
          },
          onComplete: function () {
            // アニメーションの再開
            setTimeout(() => animatePoints(), 0.01);
          },
        }
      );

    animationRef.current = timeline;
  }, [geometry]);

  // カメラアニメーションの最適化
  const cameraPositionRef = useRef({ x: 0, y: 0 });
  useFrame(() => {
    const time = Date.now() * 0.0002;
    const newX = Math.sin(time) * 5;
    const newY = Math.cos(time) * 5;

    // 値が十分に変化した場合のみ更新
    if (
      Math.abs(newX - cameraPositionRef.current.x) > 0.01 ||
      Math.abs(newY - cameraPositionRef.current.y) > 0.01
    ) {
      camera.position.x = newX;
      camera.position.y = newY;
      cameraPositionRef.current = { x: newX, y: newY };
      camera.lookAt(0, 0, 0);
    }
  });

  useEffect(() => {
    const activePoints = generateInitialActivePoints();
    activePointsRef.current = activePoints;
    animatePoints();

    return () => {
      // クリーンアップ時にアニメーションを適切に破棄
      if (animationRef.current) {
        animationRef.current.kill();
      }
      activePointsRef.current.clear();
    };
  }, [animatePoints, generateInitialActivePoints]);

  return <primitive object={points} ref={pointsRef} />;
}

const NetworkBackground = () => {
  return (
    <div className={`fixed inset-0 ${styles["network-background"]}`}>
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Points />
      </Canvas>
    </div>
  );
};

export default NetworkBackground;
