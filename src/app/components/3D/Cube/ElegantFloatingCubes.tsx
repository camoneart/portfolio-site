'use client'

import { Canvas } from '@react-three/fiber';
import Scene from "./Scene";

const ElegantFloatingCubes = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.01,
        far: 100,
      }}>
      <Scene />
    </Canvas>
  )
}

export default ElegantFloatingCubes;