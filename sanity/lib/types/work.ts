import { FileUrlBuilderOptions } from "@sanity/asset-utils"
import { PortableTextBlock } from "next-sanity"
import { File, Image, Slug, TypedObject } from "sanity"

export type Work = {
    title: string,
    _id: string,
    description_block: TypedObject[] | TypedObject,
    objectFile: File,
    slug: Slug,
    body: PortableTextBlock[]

}
  
export type WorkBatch = Work[]