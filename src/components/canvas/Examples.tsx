'use client'

import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function MetaBall(props) {
  const { scene } = useLoader(GLTFLoader, '/metaball.glb')

  useFrame((state, delta) => (scene.rotation.y += (delta / 10)))

  return <primitive object={scene} {...props} />

}