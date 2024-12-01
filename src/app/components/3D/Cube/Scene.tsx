import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Cube from './Cube'
import generateCubes from './generateCubes'
import * as THREE from 'three'

const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const cubes = useMemo(() => generateCubes(), []);

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.0005;
      groupRef.current.rotation.y += 0.0008;
    }

    // カメラの動き
    camera.position.x += (pointer.x * 0.5 - camera.position.x) * 0.017;
    camera.position.y += (-pointer.y * 0.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  })

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[45, 35, 35]}
        fov={50}
      />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} castShadow intensity={1} />
      <pointLight position={[-3, 2, 3]} color={0xff69b4} intensity={1} distance={10} />
      <pointLight position={[3, -2, -3]} color={0x00ffff} intensity={1} distance={10} />
      <group ref={groupRef} position={[0, 0, 0]}>
        {cubes.map((props, index) => (
          <Cube key={index} {...props} />
        ))}
      </group>
    </>
  )
}

export default Scene;

