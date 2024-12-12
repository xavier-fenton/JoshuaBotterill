import { FileUrlBuilderOptions } from "@sanity/asset-utils"
import { File, Slug, TypedObject } from "sanity"

export type Work = {
    title: string,
    _id: string,
    description_block: TypedObject[] | TypedObject,
    objectFile: File
}
  
export type WorkBatch = Work[]