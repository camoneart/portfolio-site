"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { createPointsSystem } from './helpers';
import styles from './NetworkBackground.module.css';
gsap.registerPlugin(CustomEase, useGSAP);

CustomEase.create('custom', 'M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1.001 1,1');

const GRID_CONFIG = {
  gridSize: 100,
  spacing: 1.5
};

// アクティブポイントの数を定義
const ACTIVE_POINTS_COUNT = 1000;

function Points() {
  const pointsRef = useRef<THREE.Points>(null);
  const { camera } = useThree();
  
  // アクティブなポイントのインデックスを保持する参照を作成
  const activePointsRef = useRef<Set<number>>(new Set());
  
  const { geometry, points, positions } = React.useMemo(
    () => createPointsSystem(GRID_CONFIG),
    []
  );

  // 初期のアクティブポイントをランダムに生成する関数
  const generateInitialActivePoints = React.useCallback(() => {
    const totalPoints = positions.length / 3;
    const activePoints = new Set<number>();

    while (activePoints.size < ACTIVE_POINTS_COUNT) {
      const randomIndex = Math.floor(Math.random() * totalPoints);
      activePoints.add(randomIndex);
    }

    return activePoints;
  }, [positions.length]);

  const animatePoint = React.useCallback((index: number) => {
    if (!geometry) return;
    
    const scaleAttribute = geometry.attributes.scale;
    
    gsap.timeline()
      .to({}, {
        duration: 4, // activeポイントの拡大アニメーション時間
        ease: 'custom',
        onUpdate: function() {
          scaleAttribute.array[index] = 1 + this.progress();
          scaleAttribute.needsUpdate = true;
        }
      })
      .to({}, {
        duration: 4, // activeポイントの縮小アニメーション時間
        ease: 'custom',
        onUpdate: function() {
          scaleAttribute.array[index] = 2 - this.progress();
          scaleAttribute.needsUpdate = true;
        },
        onComplete: function() {
          // アニメーション完了後、同じポイントで再度アニメーションを開始
          setTimeout(() => {
            if (activePointsRef.current.has(index)) {
              animatePoint(index);
            }
          }, 0.01);
        }
      });
  }, [geometry]);

  // 初期アクティブポイントの設定と開始
  React.useEffect(() => {
    const activePoints = generateInitialActivePoints();
    activePointsRef.current = activePoints;

    // 各アクティブポイントのアニメーションを開始
    activePoints.forEach(index => {
      animatePoint(index);
    });

    // クリーンアップ時にアクティブポイントをクリア
    return () => {
      activePointsRef.current.clear();
    };
  }, [animatePoint, generateInitialActivePoints]);

  useFrame(() => {
    camera.position.x = Math.sin(Date.now() * 0.0002) * 5;
    camera.position.y = Math.cos(Date.now() * 0.0002) * 5;
    camera.lookAt(0, 0, 0);
  });

  return <primitive object={points} ref={pointsRef} />;
}

const NetworkBackground = () => {
  return (
    <div className={`fixed inset-0 ${styles["network-background"]}`} >
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