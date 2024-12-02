'use client'
import { Suspense, useState } from 'react'
import { MetaBall } from '../canvas/Examples'
import dynamic from 'next/dynamic'

// import { View, Common } from '@/page'
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
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const ObjectSection = dynamic(() => import('@/components/display/ObjectSection').then((mod) => mod.ObjectSection), { ssr: false })


const WorkSection = () => {
    const [display, setDisplay] = useState<boolean>(false)


    return (


        <>
            <div id="work-section" className='flex h-full flex-col bg-red-500'>
                {/* Display on/off Object Section, We send object details to this component */}
                <div className={`${display == false ? 'hidden' : 'absolute'} sticky top-0 z-10 bg-white`}>
                    {/* <ObjectSection props={{ display: display, setDisplay: setDisplay }} /> */}
                </div>

                <div className="px-[5px] pt-[5px] font-penny text-[24px]">Work</div>
                {/* Spit section, left side Grid display. Right side main display */}
                <div className="relative m-[5px] flex h-full flex-row rounded bg-green-400">
                    {/* Grid */}
                    <div className="relative size-full rounded bg-slate-400">


                        <div className="relative grid h-full grid-cols-2 gap-[10px] p-[10px] md:grid-cols-3">
                            <div className="relative h-1/2 cursor-pointer" onClick={() => { setDisplay(true) }}>
                                <View className="relative aspect-square size-full">
                                    <Suspense >
                                        <MetaBall scale={0.5} position={[0, 0, 0]} rotation={[0.0, 0.0, 0.0]} />
                                        <Common color={'white'} />
                                    </Suspense>
                                </View>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </>
    )
}

export { WorkSection }