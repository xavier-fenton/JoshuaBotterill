'use client'

import { PrimitiveProps, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function MetaBall(props) {
  const { scene } = useLoader(GLTFLoader, '/metaball.glb')


  return <primitive object={scene} {...props} />

}


export function UntitledObject(props) {
  const { scene } = useLoader(GLTFLoader, '/untitled.glb')


  return <primitive object={scene} {...props} />

}