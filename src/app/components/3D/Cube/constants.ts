import * as THREE from 'three';

// 定数を別ファイルに分離
export const CUBE_CONFIG = {
  GRID_SIZE: 6,
  SPACING: 1.2,
  SCATTER_COUNT: 120,
  SCATTER_RANGE: {
    X: 12,
    Y: 10,
    Z: 12
  },
  FLOAT: {
    MIN_SPEED: 0.0002,
    MAX_SPEED: 0.0005,
    MIN_AMPLITUDE: 0.05,
    MAX_AMPLITUDE: 0.15
  }
} as const;

// 型定義
export interface CubeFloat {
  speed: number;
  amplitude: number;
  offset: number;
  rotationAxis: THREE.Vector3;
  rotationSpeed: number;
}

export interface CubeScatter {
  direction: THREE.Vector3;
  speed: number;
  rotationSpeed: THREE.Vector3;
  isScattered: boolean;
}

export interface CubeData {
  position: THREE.Vector3;
  float: CubeFloat;
  scatter: CubeScatter;
} 