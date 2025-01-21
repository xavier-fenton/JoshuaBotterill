'use client'

import { Work } from "sanity/lib/types/work"
import { PortableText } from "next-sanity"
import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url"
import { urlFor } from "../../../sanity/lib/image"


export const SanityContentSection = ({ content }: { content: Work }) => {
  
  

    const myPortableTextComponents = {
        types: {
                image: ({value}) =>
                    <div className="relative h-full">
                        <img
                            className="relative pb-[5px]"
                            src={urlFor(value).url()}
                            alt="test"
                            priority="true"
                            sizes="h-full"
                        /></div>
            }
      }
      

    return (
        <>
            <div className="lg:place-items-center h-dvh pt-[0px] lg:pl-[20px] lg:pt-[40px]">
                <div className="relative top-0 text-[64px] lg:absolute lg:top-[40px]">{content.title}</div>
                    <div className="relative w-full md:w-[75%] lg:w-[80%] px-[10px] pt-0 text-justify text-xs lg:pt-[68px]">
                        <PortableText value={content.body} components={myPortableTextComponents}/>
                        {/* <SampleImageComponent arg={content} /> */}

                    </div>
                </div>
        </>
    )
}
