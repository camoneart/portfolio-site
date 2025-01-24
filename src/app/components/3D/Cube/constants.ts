import * as THREE from 'three';

// 定数を別ファイルに分離
export const CUBE_CONFIG = {
  GRID_SIZE: 6, // グリッドの一辺のキューブの数
  SPACING: 1.2, // キューブ間の間隔
  SCATTER_COUNT: 130, // 散乱させるキューブの数
  SCATTER_RANGE: {
    X: 12, // 横方向の範囲
    Y: 12, // 縦方向の範囲
    Z: 12 // 奥行方向の範囲
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