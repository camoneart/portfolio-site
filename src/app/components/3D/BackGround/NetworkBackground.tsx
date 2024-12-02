"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { createPointsSystem, findNeighbors } from './helpers';

gsap.registerPlugin(CustomEase, useGSAP);

// より自然な動きを実現するカスタムイージー
CustomEase.create('custom', 'M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1.001 1,1');

const GRID_CONFIG = {
  gridSize: 100,
  spacing: 1.5
};

function Points() {
  const pointsRef = useRef<THREE.Points>(null);
  const { camera } = useThree();
  
  // ポイントシステムの作成
  const { geometry, points, positions, originalPositions } = React.useMemo(
    () => createPointsSystem(GRID_CONFIG),
    []
  );

  // アニメーション関数
  const animatePoint = React.useCallback((index: number) => {
    if (!geometry) return;
    
    const scaleAttribute = geometry.attributes.scale;
    
    gsap.timeline()
      .to({}, {
        duration: 2, // activeポイントの拡大アニメーション時間
        ease: 'custom',
        onUpdate: function() {
          scaleAttribute.array[index] = 1 + this.progress();
          scaleAttribute.needsUpdate = true;
        }
      })
      .to({}, {
        duration: 2, // activeポイントの縮小アニメーション時間
        ease: 'custom',
        onUpdate: function() {
          scaleAttribute.array[index] = 2 - this.progress();
          scaleAttribute.needsUpdate = true;
        },
        onComplete: function() {
          const neighbors = findNeighbors(index, originalPositions, GRID_CONFIG.spacing);
          if (neighbors.length > 0) {
            const nextIndex = neighbors[Math.floor(Math.random() * neighbors.length)];
            setTimeout(() => animatePoint(nextIndex), 100);
          }
        }
      });
  }, [geometry, originalPositions]);

  // ランダムアニメーションの開始
  React.useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * (positions.length / 3));
      animatePoint(randomIndex);
    }, 25); // 25ミリ秒ごとに新しいポイントをアクティブ化

    return () => clearInterval(interval);
  }, [animatePoint, positions.length]);

  // カメラアニメーション
  useFrame(() => {
    camera.position.x = Math.sin(Date.now() * 0.0002) * 5;
    camera.position.y = Math.cos(Date.now() * 0.0002) * 5;
    camera.lookAt(0, 0, 0);
  });

  return <primitive object={points} ref={pointsRef} />;
}

const NetworkBackground = () => {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{ backgroundColor: '#131315' }}
    >
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