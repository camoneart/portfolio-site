import * as THREE from 'three';

const generateCubes = () => {
  const cubes = []
  const gridSize = 6 // キューブの数
  const spacing = 1.2 // キューブの間隔
  const scatterCount = 120 // 散らばるキューブの数

  // 不足しているキューブを含むメインキューブ構造を生成する
  const missingPositions = []
  for (let i = 0; i < scatterCount; i++) {
    missingPositions.push(new THREE.Vector3(
      Math.floor(Math.random() * gridSize),
      Math.floor(Math.random() * gridSize),
      Math.floor(Math.random() * gridSize)
    ))
  }

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      for (let z = 0; z < gridSize; z++) {
        const isMissing = missingPositions.some(pos =>
          pos.x === x && pos.y === y && pos.z === z
        )
        if (!isMissing) {
          const position = new THREE.Vector3(
            (x - gridSize / 2 + 0.5) * spacing,
            (y - gridSize / 2 + 0.5) * spacing,
            (z - gridSize / 2 + 0.5) * spacing
          )
          cubes.push(createCube(position))
        }
      }
    }
  }

  // 散らばったキューブを生成する
  for (let i = 0; i < scatterCount; i++) {
    const randomPosition = new THREE.Vector3(
      (Math.random() - 0.5) * gridSize * spacing * 8,  // x軸方向の散らばり範囲（横方向）
      (Math.random() - 0.5) * gridSize * spacing * 7,  // y軸方向の散らばり範囲（高さ方向）
      (Math.random() - 0.5) * gridSize * spacing * 10  // z軸方向の散らばり範囲（奥行き方向）
    )
    cubes.push(createCube(randomPosition, true))
  }

  return cubes;
}

const createCube = (position: THREE.Vector3, isScattered = false) => {
  return {
    position,
    float: {
      offset: Math.random() * Math.PI * 2,
      amplitude: Math.random() * 0.1 + 0.05,
      rotationAxis: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(),
      speed: Math.random() * 0.0003 + 0.0002,
      rotationSpeed: Math.random() * 0.0005 + 0.0002,
    },
    scatter: {
      direction: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(),
      speed: Math.random() * 0.02 + 0.01,
      rotationSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      isScattered,
    }
  }
}

export default generateCubes;

