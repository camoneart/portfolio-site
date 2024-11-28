"use client";

// ここからインポート
import {
  useGLTF,
  useTexture,
  MeshPortalMaterial,
  RoundedBox,
  Text,
  CameraControls,
} from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
// ここまでインポート

// Sceneの内部コンポーネントを作成
const  Experience = () => {
  const model = useGLTF("/model/1.glb");
  const texture = useTexture("/texture/1.png");
  const [active, setActive] = useState(false);
  const meshPortalMaterialRef = useRef();
  const cameraControlsRef = useRef();
  // フレームごとの更新
  useFrame((_, delta) => {
    easing.damp(
      meshPortalMaterialRef.current,
      "blend",
      active ? 1 : 0,
      0.2,
      delta
    );
  });

  // 初回レンダリング時と、activeが変更された時のみ実行する処理
  useEffect(() => {
    if (active) {
      // カメラの位置を設定
      cameraControlsRef.current.setLookAt(0, 0, 3.5, 0, 0, 0, true);
    } else {
      // カメラの位置を設定
      cameraControlsRef.current.setLookAt(0, 0, 5, 0, 0, 0, true);
    }
  }, [active]);

  // ダブルクリック時の処理
  const doubleClickHandler = () => {
    setActive(!active);
  };

  return (
    <>
      <CameraControls ref={cameraControlsRef} />

      <Text font="/font/bold.ttf" position={[0, 1.35, 0.1]} fontSize={0.4}>
        Eggs
        <meshBasicMaterial toneMapped={false} />
      </Text>

      <RoundedBox
        args={[2.5, 3.3, 0.1]}
        radius={0.15}
        onDoubleClick={doubleClickHandler}
      >
        <MeshPortalMaterial ref={meshPortalMaterialRef}>
          <primitive object={model.scene} scale={0.6} position-y={0.6} />
          {/* <primitive scale={0.6} position-y={0.6} /> */}

          <mesh>
            <sphereGeometry args={[6, 204, 204]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </>
  );
}

// メインのSceneコンポーネント
const Scene = () => {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  );
};

export default Scene;
