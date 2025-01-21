import Link from "next/link"
import { retrieveContent } from "../../../sanity/lib/utils/fetchPosts";
import { client } from "../../../sanity/lib/utils/sanityClient";
import { Work, WorkBatch } from "../../../sanity/lib/types/work";
import { urlBuilder } from "@/helpers/utils/sanityUrlBuilder";
import { ObjectSection } from "@/components/display/ObjectSection";
import { SanityContentSection } from "@/components/SanityContent/SanityContent";


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
                <div className='absolute top-[20px] z-10 -rotate-12 font-penny text-[40px]'><Link href="/">JoshBotterill</Link></div>
                <div className="relative top-0 h-dvh w-full lg:w-1/2 lg:fixed">
                    <ObjectSection source={urlBuilder(objectData.objectFile.asset._ref)} />
                </div>
                <div className="w-1/2">
                </div>
                <SanityContentSection content={objectData} />
                {/* This to be its own component send props into here */}
            </div>
           
        </>
    )
}