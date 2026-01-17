import * as THREE from "three";

interface GridConfig {
  gridSize: number;
  spacing: number;
}

export const createPointsSystem = ({ gridSize, spacing }: GridConfig) => {
  const positions: number[] = [];
  const scales: number[] = [];
  const originalPositions: number[] = [];

  // ポイントのグリッドを作成
  for (let x = -gridSize; x <= gridSize; x++) {
    for (let y = -gridSize; y <= gridSize; y++) {
      positions.push(x * spacing, y * spacing, 0);
      originalPositions.push(x * spacing, y * spacing, 0);
      scales.push(1);
    }
  }

  // ポイントジオメトリを作成する
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("scale", new THREE.Float32BufferAttribute(scales, 1));

  // シェーダーマテリアルのカスタマイズ
  const material = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color("#999999") },
      activeColor: { value: new THREE.Color("#ffa8ba") },
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
    depthWrite: false,
  });

  // ポイントを作成
  const points = new THREE.Points(geometry, material);

  return {
    geometry,
    points,
    positions,
    originalPositions,
  };
};

export const findNeighbors = (
  index: number,
  originalPositions: number[],
  spacing: number
): number[] => {
  const position = new THREE.Vector3(
    originalPositions[index * 3],
    originalPositions[index * 3 + 1],
    originalPositions[index * 3 + 2]
  );

  const neighbors: number[] = [];

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
