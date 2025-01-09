'use server'

import Link from "next/link"
export async function Page2({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    return <div>My Post: {slug}</div>
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className='font-penny absolute top-[20px] z-10 -rotate-12 text-[40px]'><Link href="/">JoshBotterill</Link></div>
                <div className="h-dvh"></div>
                <div className="h-dvh pt-[40px]">
                    <div className="relative top-[40px] text-[64px] lg:absolute">Object001</div>
                    <div>
                        <div className="w-[70%] pl-[10px] pt-[10px] text-justify text-xs lg:pl-[40px] lg:pt-[68px]">
                            <p>
                                Reprehenderit proident irure occaecat voluptate laborum quis. Irure aliquip sint deserunt ut enim occaecat et elit. Nisi ad tempor minim duis reprehenderit dolore qui ad deserunt tempor elit. Eiusmod non esse aliqua qui minim occaecat ullamco eiusmod sunt elit aliqua commodo et irure. Consequat duis ullamco commodo ut laboris anim ipsum sint magna. Mollit id aute culpa aliqua in aliqua sunt. Occaecat aliquip veniam in dolore ipsum et laborum Lorem in.
                            </p>
                            <p>
                                Reprehenderit proident irure occaecat voluptate laborum quis. Irure aliquip sint deserunt ut enim occaecat et elit. Nisi ad tempor minim duis reprehenderit dolore qui ad deserunt tempor elit. Eiusmod non esse aliqua qui minim occaecat ullamco eiusmod sunt elit aliqua commodo et irure. Consequat duis ullamco commodo ut laboris anim ipsum sint magna. Mollit id aute culpa aliqua in aliqua sunt. Occaecat aliquip veniam in dolore ipsum et laborum Lorem in.
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}