"use client";

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, SpotLight } from '@react-three/drei'
import { Vector3 } from 'three'
import { SpotLight as SpotLightImpl } from 'three'

export default function Projector({ position }: { position: Vector3 | [number, number, number] }) {
  const lightRef = useRef<SpotLightImpl>(null)

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.target.position.x = Math.sin(state.clock.elapsedTime) * 2
      lightRef.current.target.position.z = -3 + Math.cos(state.clock.elapsedTime) * 2
      lightRef.current.target.updateMatrixWorld()
    }
  })

  return (
    <group position={position}>
      <Box args={[0.5, 0.5, 0.8]}>
        <meshStandardMaterial color="#333333" />
      </Box>
      <SpotLight
        ref={lightRef}
        position={[0, -0.5, 0.4]}
        angle={0.6}
        penumbra={0.5}
        intensity={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
    </group>
  )
}

