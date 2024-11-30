import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

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
  };
}

const Cube = ({ position, float, scatter }: CubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const hoverRef = useRef(0);
  const velocityRef = useRef(new THREE.Vector3());
  const initialPosition = useMemo(() => position.clone(), [position]);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        hover: { value: 0.0 },
        baseColor: { value: new THREE.Color(0xffffff) },
        rimColor: { value: new THREE.Color(0xffd569) },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        uniform float hover;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          
          vec3 pos = position;
          pos += normal * hover * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float hover;
        uniform vec3 baseColor;
        uniform vec3 rimColor;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          
          float fresnel = 0.1 + pow(1.0 + dot(viewDir, normal), 2.0);
          
          float rainbow = sin(dot(normal, viewDir) * 10.0 + time) * 0.5 + 0.5;
          vec3 iridescence = vec3(
            sin(rainbow * 3.14159 * 2.0) * 0.5 + 0.5,
            sin(rainbow * 3.14159 * 2.0 + 2.094) * 0.5 + 0.5,
            sin(rainbow * 3.14159 * 2.0 + 4.188) * 0.5 + 0.5
          );
          
          vec3 color = mix(baseColor, rimColor, fresnel + hover * 0.3);
          color = mix(color, iridescence, 0.3 + hover * 0.2);
          
          gl_FragColor = vec4(color, 0.8 + hover * 0.2);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    })
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    const time = clock.getElapsedTime()
    material.uniforms.time.value = time

    const floatOffset = Math.sin(time * float.speed + float.offset) * float.amplitude;
    const floatPosition = initialPosition.clone().add(new THREE.Vector3(0, floatOffset, 0));

    meshRef.current.quaternion.setFromAxisAngle(float.rotationAxis, time * float.rotationSpeed * 0.5);

    if (hoverRef.current > 0) {
      velocityRef.current.add(scatter.direction.clone().multiplyScalar(scatter.speed * 0.01));
      velocityRef.current.y += Math.sin(time) * 0.001;
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
      meshRef.current.position.lerp(floatPosition, 0.02);
      velocityRef.current.multiplyScalar(0.95);
    }

    material.uniforms.hover.value = hoverRef.current;
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