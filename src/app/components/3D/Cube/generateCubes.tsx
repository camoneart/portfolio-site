import "client-only";

import * as THREE from "three";
import { CUBE_CONFIG, CubeData } from "./constants";

const generateCubes = (): CubeData[] => {
  const cubes: CubeData[] = [];

  // 球状クラウド（蠢く立方体の塊。うねりは Cube.tsx の useFrame が担う）
  generateCloudCubes(cubes);
  // 周辺の散らばりキューブ
  generateScatteredCubes(cubes);

  return cubes;
};

const generateCloudCubes = (cubes: CubeData[]): void => {
  const { GRID_SIZE, SPACING } = CUBE_CONFIG;
  const half = (GRID_SIZE - 1) / 2;

  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      for (let k = 0; k < GRID_SIZE; k++) {
        const nx = (i - half) / half;
        const ny = (j - half) / half;
        const nz = (k - half) / half;
        // 球をベースに少しハート型へ寄せる（上が膨らみ下が尖る。係数0.4で控えめに）
        const a = nx * nx + ny * ny + nz * nz - 1;
        if (a * a * a - nx * nx * ny * ny * ny * 0.4 > 0) continue;
        const s = SPACING * 0.78; // 中央クラウドのサイズ（散らばりは変えず中央だけ小さく）
        cubes.push(createCube(new THREE.Vector3((i - half) * s, (j - half) * s, (k - half) * s)));
      }
    }
  }
};

const generateScatteredCubes = (cubes: CubeData[]): void => {
  const scatterRange = {
    x: CUBE_CONFIG.GRID_SIZE * CUBE_CONFIG.SPACING * CUBE_CONFIG.SCATTER_RANGE.X,
    y: CUBE_CONFIG.GRID_SIZE * CUBE_CONFIG.SPACING * CUBE_CONFIG.SCATTER_RANGE.Y,
    z: CUBE_CONFIG.GRID_SIZE * CUBE_CONFIG.SPACING * CUBE_CONFIG.SCATTER_RANGE.Z,
  };

  for (let i = 0; i < CUBE_CONFIG.SCATTER_COUNT; i++) {
    cubes.push(
      createCube(
        new THREE.Vector3(
          (Math.random() - 0.5) * scatterRange.x,
          (Math.random() - 0.5) * scatterRange.y,
          (Math.random() - 0.5) * scatterRange.z
        ),
        true
      )
    );
  }
};

// createCubeの最適化
const createCube = (position: THREE.Vector3, isScattered = false): CubeData => {
  return {
    position,
    float: {
      offset: Math.random() * Math.PI * 2,
      amplitude:
        Math.random() * (CUBE_CONFIG.FLOAT.MAX_AMPLITUDE - CUBE_CONFIG.FLOAT.MIN_AMPLITUDE) +
        CUBE_CONFIG.FLOAT.MIN_AMPLITUDE,
      rotationAxis: new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize(),
      speed:
        Math.random() * (CUBE_CONFIG.FLOAT.MAX_SPEED - CUBE_CONFIG.FLOAT.MIN_SPEED) +
        CUBE_CONFIG.FLOAT.MIN_SPEED,
      rotationSpeed:
        Math.random() * (CUBE_CONFIG.FLOAT.MAX_SPEED - CUBE_CONFIG.FLOAT.MIN_SPEED) +
        CUBE_CONFIG.FLOAT.MIN_SPEED,
    },
    scatter: {
      direction: new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize(),
      speed: Math.random() * 0.02 + 0.01,
      rotationSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      isScattered,
    },
  };
};

export default generateCubes;
