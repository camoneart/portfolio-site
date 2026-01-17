import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CubeProps {
  position: THREE.Vector3;
  float: {
    speed: number;
    amplitude: number;
    offset: number;
    rotationAxis: THREE.Vector3;
    rotationSpeed: number;
  };
  scatter: {
    direction: THREE.Vector3;
    speed: number;
    rotationSpeed: THREE.Vector3;
    isScattered: boolean;
  };
}

const Cube = ({ position, float, scatter }: CubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const hoverRef = useRef(0);
  const velocityRef = useRef(new THREE.Vector3());
  const initialPosition = useMemo(() => position.clone(), [position]);
  const currentHoverValue = useRef(0); // 現在のホバー値を追跡

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        hover: { value: 0.0 },
        color1: { value: new THREE.Color(0xff5a78) },
        color2: { value: new THREE.Color(0xff8fa8) },
        color3: { value: new THREE.Color(0xffc8d8) },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vPosition;
        uniform float hover;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          vPosition = position;

          vec3 pos = position;
          pos += normal * hover * 0.1;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float hover;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vPosition;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);

          float fresnel = 0.1 + pow(1.0 + dot(viewDir, normal), 2.0);

          float gradientFactor = (-vPosition.y + 0.5);
          vec3 gradient = mix(color1, color2, gradientFactor);
          gradient = mix(gradient, color3, gradientFactor * 0.5);

          vec3 color = mix(gradient, gradient * 1.2, fresnel + hover * 0.3);

          gl_FragColor = vec4(color, 0.85 + hover * 0.15);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    material.uniforms.time.value = time;

    // ホバー時のインタラクション
    const hoverSpeed = 0.1; // キューブが膨らむ速度。この値を小さくすると遅く、大きくすると速くなります
    currentHoverValue.current += (hoverRef.current - currentHoverValue.current) * hoverSpeed;
    material.uniforms.hover.value = currentHoverValue.current;

    const floatOffset = Math.sin(time * float.speed + float.offset) * float.amplitude;
    const floatPosition = initialPosition.clone().add(new THREE.Vector3(0, floatOffset, 0));

    meshRef.current.quaternion.setFromAxisAngle(
      float.rotationAxis,
      time * float.rotationSpeed * 0.5
    );

    if (scatter.isScattered) {
      meshRef.current.position.x = initialPosition.x + Math.sin(time * 0.5 + float.offset) * 2;
      meshRef.current.position.y = initialPosition.y + Math.cos(time * 0.7 + float.offset) * 2;
      meshRef.current.position.z = initialPosition.z + Math.sin(time * 0.3 + float.offset) * 2;

      meshRef.current.rotation.x += scatter.rotationSpeed.x * 0.01;
      meshRef.current.rotation.y += scatter.rotationSpeed.y * 0.01;
      meshRef.current.rotation.z += scatter.rotationSpeed.z * 0.01;
    } else if (currentHoverValue.current > 0.01) {
      // ホバー中の動き
      velocityRef.current.add(scatter.direction.clone().multiplyScalar(scatter.speed * 0.01));
      velocityRef.current.y += Math.sin(time) * 0.001; // 中心に集まるキューブが元の位置に戻る速度
      velocityRef.current.multiplyScalar(0.99);

      meshRef.current.position.add(velocityRef.current);

      meshRef.current.rotation.x += scatter.rotationSpeed.x * 0.3;
      meshRef.current.rotation.y += scatter.rotationSpeed.y * 0.3;
      meshRef.current.rotation.z += scatter.rotationSpeed.z * 0.3;

      const distance = meshRef.current.position.distanceTo(initialPosition);
      if (distance > 10) {
        velocityRef.current.multiplyScalar(-0.5);
      }
    } else {
      meshRef.current.position.lerp(floatPosition, 0.01);
      velocityRef.current.multiplyScalar(0.95);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      material={material}
      onPointerOver={() => (hoverRef.current = 1)}
      onPointerOut={() => (hoverRef.current = 0)}
    >
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
    </mesh>
  );
};

export default Cube;
