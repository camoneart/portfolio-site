import * as THREE from "three";
import { CUBE_CONFIG, CubeData } from "./constants";

const generateCubes = (): CubeData[] => {
  const cubes: CubeData[] = [];
  const missingPositions = generateMissingPositions();

  // メインキューブ生成を最適化
  generateMainCubes(cubes, missingPositions);
  // 散らばりキューブ生成を最適化
  generateScatteredCubes(cubes);

  return cubes;
};

// 関数を分割して最適化
const generateMissingPositions = (): THREE.Vector3[] => {
  return Array.from(
    { length: CUBE_CONFIG.SCATTER_COUNT },
    () =>
      new THREE.Vector3(
        Math.floor(Math.random() * CUBE_CONFIG.GRID_SIZE),
        Math.floor(Math.random() * CUBE_CONFIG.GRID_SIZE),
        Math.floor(Math.random() * CUBE_CONFIG.GRID_SIZE)
      )
  );
};

const generateMainCubes = (
  cubes: CubeData[],
  missingPositions: THREE.Vector3[]
): void => {
  const halfGrid = CUBE_CONFIG.GRID_SIZE / 2;

  for (let x = 0; x < CUBE_CONFIG.GRID_SIZE; x++) {
    for (let y = 0; y < CUBE_CONFIG.GRID_SIZE; y++) {
      for (let z = 0; z < CUBE_CONFIG.GRID_SIZE; z++) {
        if (!isMissingPosition(x, y, z, missingPositions)) {
          cubes.push(
            createCube(
              new THREE.Vector3(
                (x - halfGrid + 0.5) * CUBE_CONFIG.SPACING,
                (y - halfGrid + 0.5) * CUBE_CONFIG.SPACING,
                (z - halfGrid + 0.5) * CUBE_CONFIG.SPACING
              )
            )
          );
        }
      }
    }
  }
};

const generateScatteredCubes = (cubes: CubeData[]): void => {
  const scatterRange = {
    x:
      CUBE_CONFIG.GRID_SIZE * CUBE_CONFIG.SPACING * CUBE_CONFIG.SCATTER_RANGE.X,
    y:
      CUBE_CONFIG.GRID_SIZE * CUBE_CONFIG.SPACING * CUBE_CONFIG.SCATTER_RANGE.Y,
    z:
      CUBE_CONFIG.GRID_SIZE * CUBE_CONFIG.SPACING * CUBE_CONFIG.SCATTER_RANGE.Z,
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

const isMissingPosition = (
  x: number,
  y: number,
  z: number,
  missingPositions: THREE.Vector3[]
): boolean => {
  return missingPositions.some(
    (pos) => pos.x === x && pos.y === y && pos.z === z
  );
};

// createCubeの最適化
const createCube = (position: THREE.Vector3, isScattered = false): CubeData => {
  return {
    position,
    float: {
      offset: Math.random() * Math.PI * 2,
      amplitude:
        Math.random() *
          (CUBE_CONFIG.FLOAT.MAX_AMPLITUDE - CUBE_CONFIG.FLOAT.MIN_AMPLITUDE) +
        CUBE_CONFIG.FLOAT.MIN_AMPLITUDE,
      rotationAxis: new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize(),
      speed:
        Math.random() *
          (CUBE_CONFIG.FLOAT.MAX_SPEED - CUBE_CONFIG.FLOAT.MIN_SPEED) +
        CUBE_CONFIG.FLOAT.MIN_SPEED,
      rotationSpeed:
        Math.random() *
          (CUBE_CONFIG.FLOAT.MAX_SPEED - CUBE_CONFIG.FLOAT.MIN_SPEED) +
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
