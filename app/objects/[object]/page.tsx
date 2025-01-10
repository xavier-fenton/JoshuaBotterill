import Link from "next/link"
import { retrieveContent } from "../../../sanity/lib/utils/fetchPosts";
import { client } from "../../../sanity/lib/utils/sanityClient";
import { Work, WorkBatch } from "../../../sanity/lib/types/work";
import { urlBuilder } from "@/helpers/utils/sanityUrlBuilder";
import { ObjectSection } from "@/components/display/ObjectSection";


async function getCurrentObject(slug: string) {

    const data = await retrieveContent(client)
    if (!data) {
        console.trace()
        console.error("Error recieving information from the Sanity Client")
    } else return data

}

function matchCurrentData(arg: WorkBatch, match: string) {
    return arg.find((entry: Work) => entry.slug.current === match)
}

export default async function Page({ params }: { params: { object: string } }) {

    const slug = params.object
    const data = await getCurrentObject(slug)
    const objectData = matchCurrentData(data, slug)

    // Better error handling here
    if (!objectData) {
        return <h1 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-sm">404 - Sorry page doesn't exist...</h1>
    }





    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className='font-penny absolute top-[20px] z-10 -rotate-12 text-[40px]'><Link href="/">JoshBotterill</Link></div>
                <div className="h-dvh">
                    <ObjectSection source={urlBuilder(objectData.objectFile.asset._ref)} />
                </div>
                <div className="h-dvh pt-[40px]">
                    <div className="relative top-[40px] text-[64px] lg:absolute">{objectData.title}</div>
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