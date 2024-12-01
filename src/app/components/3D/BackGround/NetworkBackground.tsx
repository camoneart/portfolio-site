"use client";

import React, { useRef } from 'react';
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

const NetworkBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // シーンの設定
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // カメラの設定
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // レンダラーの設定
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor('#131315', 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ポイントシステムを作成
    const { geometry, points, positions, originalPositions } = createPointsSystem(GRID_CONFIG);
    scene.add(points);
    pointsRef.current = points;

    // アニメーション関数
    const animatePoint = (index: number) => {
      const scaleAttribute = geometry.attributes.scale;
      
      gsap.timeline()
        .to({}, {
          duration: 2,
          ease: 'custom',
          onUpdate: function() {
            scaleAttribute.array[index] = 1 + this.progress();
            scaleAttribute.needsUpdate = true;
          }
        })
        .to({}, {
          duration: 2,
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
    };

    // アニメーションのループ処理
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      if (camera && scene) {
        camera.position.x = Math.sin(Date.now() * 0.0002) * 5;
        camera.position.y = Math.cos(Date.now() * 0.0002) * 5;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
      }

      return () => cancelAnimationFrame(animationId);
    };

    animate();

    // ランダムアニメーションを開始する
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * (positions.length / 3));
      animatePoint(randomIndex);
    }, 50);

    // ウィンドウのサイズ変更を処理する
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      style={{ backgroundColor: '#131315' }}
    />
  );
};

export default NetworkBackground;