'use client'

import { forwardRef, HTMLAttributes, ReactNode, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, OrbitControlsProps, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import { ForwardRefComponent } from '@react-three/drei/helpers/ts-utils'

interface Props {
  children?: ReactNode,
  orbit?: OrbitControlsProps
}

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

const View: ForwardRefComponent<Props, {}> = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
