"use client";

import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Box } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import gsap from 'gsap'
import { Vector3, Mesh } from 'three'
import * as THREE from 'three'

const AnimatedBox = animated(Box)

export default function Screen({ position = new THREE.Vector3(0, 0, 0) }: { position: Vector3 | [number, number, number] }) {
  const mesh = useRef<Mesh>(null)
  const [active, setActive] = useState(false)

  const { scale } = useSpring({
    scale: active ? 1.1 : 1,
    config: { mass: 5, tension: 350, friction: 40 }
  })

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.cos(state.clock.getElapsedTime()) * 0.03
    mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.03
  })

  const handleClick = () => {
    if (!mesh.current) return;
    setActive(!active)
    gsap.to(mesh.current.position, {
      y: active ? 2 : 2.5,
      duration: 1,
      ease: 'power2.out'
    })
  }

  return (
    <AnimatedBox
      ref={mesh}
      position={position}
      args={[4, 2.25, 0.1]}
      scale={scale}
      onClick={handleClick}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      <meshStandardMaterial color="#ffffff" />
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.2}
        color="#000000"
        anchorX="center"
        anchorY="middle"
      >
        Web Developer（監督）：Kaishu Aoyama
      </Text>
    </AnimatedBox>
  )
}

