'use client'

import dynamic from 'next/dynamic'
import { MetaBall } from '../canvas/Examples'
import { Suspense } from 'react'

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


const ObjectSection = ({ props }) => {
    return (
        <>
            <div id="object-section" className='h-screen'>
                <div className="absolute z-10 w-fit -rotate-12 pt-[30px] font-penny text-[48px]">Joshua Botterill</div>
                <div className="flex size-full flex-row">
                    {/* Object */}
                    <div className='size-full'>
                        <View orbit className='relative size-full'>
                            <Suspense fallback={null}>
                                <MetaBall scale={0.5} position={[0, 0, 0]} rotation={[0.0, 0.0, 0]} />
                                <Common color={'white'} />
                            </Suspense>
                        </View>
                    </div>
                    {/* Description */}
                    <div className="size-full rounded">
                        <div className='h-full'>
                            <div className='flex w-fit flex-col items-center'>
                                {/* Description */}
                                <div className='w-4/5 pt-[20px]'>
                                    <div className='text-[38px] leading-[20px]'>Object000</div>

                                    <p className='px-[30px] text-xs leading-[15px]'>
                                        Deserunt eiusmod occaecat dolore minim et quis nostrud in veniam sint. Nostrud deserunt cupidatat adipisicing laboris incididunt dolore esse irure irure do. Ullamco ut adipisicing sint labore proident voluptate. Minim veniam voluptate aliqua dolor ipsum minim ipsum sit amet adipisicing dolore eu dolor duis. Duis qui in magna ad deserunt in dolore adipisicing tempor amet nostrud. Veniam sit voluptate sint id ad ex laborum cupidatat culpa consequat sunt laboris et Lorem.

                                        Dolore duis nulla enim irure non anim in fugiat proident officia. Commodo enim aute deserunt nulla sit mollit. Consectetur aute consequat nulla nostrud eu consequat reprehenderit aliqua sunt commodo culpa incididunt. Eiusmod dolore nisi veniam ut sunt cillum voluptate cupidatat sint est incididunt. Dolore ea sunt ullamco commodo laboris consectetur commodo tempor aliquip.

                                        Ex amet in ullamco nostrud culpa est ad elit non exercitation aliqua irure. Aliquip nostrud proident quis excepteur laboris occaecat labore fugiat occaecat. Reprehenderit laborum dolor deserunt enim ut consectetur esse duis aute quis ut labore minim. Aliquip duis ex occaecat qui voluptate ex irure enim exercitation dolor aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export { ObjectSection }