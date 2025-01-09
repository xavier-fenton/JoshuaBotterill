// This component is purely for previewing the Objects in the Sanity Studio
import { Environment, Html, OrbitControls, useCursor } from '@react-three/drei';
import { MeshProps, useLoader } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import React, { Suspense, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpring, animated, config } from '@react-spring/three'


export const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center'>
            <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </svg>
        </div>
    ),
})
export const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })


type PreviewObjectType = {
    props: PropType
}

type PropType = {
    fileSource: string
}

export const PreviewObject = ({ value }) => {
    const [active, setActive] = useState<boolean>(false)
    // const springs = useSpring({ scale: active ? 0.65 : 0.5 })
    const { scale } = useSpring({ scale: active ? 0.65 : 0.5, config: config.slow })


    if (!value) {
        return <Html><p className='border'>No file uploaded yet</p></Html>
    }

    function Object(props: MeshProps) {

        const { scene } = useLoader(GLTFLoader, value as string)


        return (
            <animated.mesh scale={scale}>
                <primitive object={scene} {...props} />
            </animated.mesh>
        )

    }


    return (
        <div className='relative h-full'>
            <View className="relative h-full">
                <Suspense>
                    <Object
                        onPointerOver={() => {
                            setActive(true);
                        }}
                        onPointerOut={() => {
                            setActive(false)
                        }}
                        position={[0, 0, 0]}
                        rotation={[0.0, 0.0, 0.0]}
                    />
                    <Common color={'white'} />
                    <Environment preset='city' background />
                    <OrbitControls enablePan={false} />
                </Suspense>
            </View>
        </div>
    );
};

export default PreviewObject;