'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import Screen from './Screen'
import Particles from './Particles'
import Projector from './Projector'

export default function MovieTheater() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={75} />
        <Suspense fallback={null}>
          <Environment preset="night" />
          <Screen position={[0, 2, -3]} />
          <Particles count={1000} />
          <Projector position={[0, 3, 2]} />
        </Suspense>
        <ambientLight intensity={0.1} />
        <OrbitControls enableZoom={false} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

