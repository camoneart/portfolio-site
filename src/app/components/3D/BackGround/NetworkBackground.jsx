"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

const NetworkBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const pointsRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup with perspective
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor('#131315', 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Grid parameters
    const gridSize = 100;
    const spacing = 1.5;
    const positions = [];
    const scales = [];
    const originalPositions = [];

    // Create grid of points
    for (let x = -gridSize; x <= gridSize; x++) {
      for (let y = -gridSize; y <= gridSize; y++) {
        positions.push(x * spacing, y * spacing, 0);
        originalPositions.push(x * spacing, y * spacing, 0);
        scales.push(1);
      }
    }

    // Create point geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1));

    // Custom shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color('#999999') },
        activeColor: { value: new THREE.Color('#FF8800') }
      },
      vertexShader: `
        attribute float scale;
        varying float vScale;
        void main() {
          vScale = scale;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * 2.0;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform vec3 activeColor;
        varying float vScale;
        void main() {
          float strength = distance(gl_PointCoord, vec2(0.5));
          float alpha = 1.0 - smoothstep(0.45, 0.5, strength);
          vec3 finalColor = mix(color, activeColor, (vScale - 1.0) / 1.0);
          gl_FragColor = vec4(finalColor, alpha * vScale);
        }
      `,
      transparent: true,
      depthWrite: false
    });

    // Create points
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    pointsRef.current = points;

    // Animation function
    const animatePoint = (index) => {
      const scaleAttribute = geometry.attributes.scale;
      
      // Custom ease for more natural movement
      CustomEase.create('custom', 'M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1.001 1,1');

      // Scale animation
      gsap.timeline()
      .to({}, {
        duration: 2, // 点灯アニメーションの時間を2秒に
        ease: 'custom',
        onUpdate: function() {
          scaleAttribute.array[index] = 1 + this.progress();
          scaleAttribute.needsUpdate = true;
        }
      })
      // Scale down animation
      .to({}, {
        duration: 2, // 消灯アニメーションの時間を2秒に
        ease: 'custom',
        onUpdate: function() {
          scaleAttribute.array[index] = 2 - this.progress();
          scaleAttribute.needsUpdate = true;
        },
        onComplete: function() {
          // Find and animate neighboring points
          const neighbors = findNeighbors(index, gridSize, spacing);
          if (neighbors.length > 0) {
            const nextIndex = neighbors[Math.floor(Math.random() * neighbors.length)];
            setTimeout(() => animatePoint(nextIndex), 100);
          }
        }
      });
    };

    // Helper function to find neighboring points
    const findNeighbors = (index, gridSize, spacing) => {
      const position = new THREE.Vector3(
        originalPositions[index * 3],
        originalPositions[index * 3 + 1],
        originalPositions[index * 3 + 2]
      );
      
      const neighbors = [];
      
      for (let i = 0; i < originalPositions.length / 3; i++) {
        if (i !== index) {
          const neighborPos = new THREE.Vector3(
            originalPositions[i * 3],
            originalPositions[i * 3 + 1],
            originalPositions[i * 3 + 2]
          );
          
          if (position.distanceTo(neighborPos) <= spacing * 1.5) {
            neighbors.push(i);
          }
        }
      }
      
      return neighbors;
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Gentle camera movement
      camera.position.x = Math.sin(Date.now() * 0.0002) * 5;
      camera.position.y = Math.cos(Date.now() * 0.0002) * 5;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Start random animations periodically
    const startRandomAnimation = () => {
      const randomIndex = Math.floor(Math.random() * (positions.length / 3));
      animatePoint(randomIndex);
    };

    const interval = setInterval(startRandomAnimation, 50);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      style={{ backgroundColor: '#131315' }}
    />
  );
};

export default NetworkBackground;