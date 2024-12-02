'use client'

import { MetaBall } from '@/components/canvas/Examples'
import { ImprintSection } from '@/components/display/ImprintSection'
import { ObjectSection } from '@/components/display/ObjectSection'
import { WorkSection } from '@/components/display/WorkSection'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { AnchorHTMLAttributes, MouseEvent, Suspense } from 'react'
import { Event } from 'three'

export const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
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

export default function Page() {


  const handleScroll = (e: MouseEvent, id: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    const section = document.querySelector(id); // Select target section
    section?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
  };



  return (
    <>
      <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-12 font-penny text-[48px]'>JoshBotterill</div>
      <div className='relative h-full'>
        <View className="relative h-full">
          <Suspense fallback={null}>
            <MetaBall scale={0.5} position={[0, 0, 0]} rotation={[0.0, 0.0, 0]} />
            <Common color={'white'} />
          </Suspense>
        </View>
      </div>
      <div className='absolute bottom-0 right-0 z-10 flex cursor-pointer flex-col p-8 text-center font-penny text-[48px]'>
        <a onClick={(e) => handleScroll(e, '#work-section')} className=''>Work</a>
        <a onClick={(e) => handleScroll(e, '#imprint-section')} className=''>Imprint</a>
      </div>

      <WorkSection />
      {/* <ObjectSection /> */}
      <ImprintSection />
    </>
  )
}
