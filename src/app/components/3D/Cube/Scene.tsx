import React, { useRef, useMemo, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Cube from "./Cube";
import generateCubes from "./generateCubes";
import * as THREE from "three";

const Scene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  // キューブデータの生成を最適化
  const cubes = useMemo(() => generateCubes(), []);

  // カメラ更新処理を最適化
  const updateCamera = useCallback(
    (pointer: THREE.Vector2) => {
      camera.position.x += (pointer.x * 0.5 - camera.position.x) * 0.015;
      camera.position.y += (-pointer.y * 0.5 - camera.position.y) * 0.015;
      camera.lookAt(0, 0, 0); // キューブの位置
    },
    [camera]
  );

  // グループの回転更新を最適化
  const updateGroupRotation = useCallback(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.001;
      groupRef.current.rotation.y += -0.001;
    }
  }, []);

  useFrame(({ pointer }) => {
    updateGroupRotation();
    updateCamera(pointer);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[30, 80, 45]} fov={50} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} castShadow intensity={1} />
      <pointLight
        position={[-3, 2, 3]}
        color={0xff69b4}
        intensity={1}
        distance={10}
      />
      <pointLight
        position={[3, -2, -3]}
        color={0x00ffff}
        intensity={1}
        distance={10}
      />
      <group ref={groupRef} position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        {cubes.map((props, index) => (
          <Cube key={index} {...props} />
        ))}
      </group>
    </>
  );
};

export default React.memo(Scene);
