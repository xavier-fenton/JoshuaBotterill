// This component is purely for previewing the Objects in the Sanity Studio
import { fetchGLB } from '@/helpers/utils/fetchGlb';
import { Environment, InstanceProps, OrbitControls } from '@react-three/drei';
import { Canvas, MeshProps, useLoader } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import React, { Suspense, useMemo, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


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

    console.log(value);


    if (!value) {
        return <p className='border'>No file uploaded yet</p>;
    }

    function Object(props: MeshProps) {

        const { scene } = useLoader(GLTFLoader, value as string)


        return <primitive object={scene} {...props} />

    }


    return (
        <div className='h-full'>
            <View className="h-full">
                <Suspense>
                    <Object scale={0.1} position={[0, -1, 0]} rotation={[0.0, 0.0, 0.0]} />
                    <Common color={'white'} />
                    <Environment preset='city' background />
                    <OrbitControls enablePan={false} />
                </Suspense>
            </View>
        </div>
    );
};

export default PreviewObject;