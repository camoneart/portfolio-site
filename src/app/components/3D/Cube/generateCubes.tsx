import * as THREE from 'three';

const generateCubes = () => {
  const cubes = []
  const gridSize = 4
  const spacing = 1.2

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      for (let z = 0; z < gridSize; z++) {
        const position = new THREE.Vector3(
          (x - gridSize / 2) * spacing,
          (y - gridSize / 2) * spacing,
          (z - gridSize / 2) * spacing
        )
        cubes.push({
          position,
          float: {
            offset: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.0003 + 0.0002,
            amplitude: Math.random() * 0.1 + 0.05,
            rotationAxis: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(),
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
          },
        })
      }
    }
  }

  return cubes;
}

export default generateCubes;