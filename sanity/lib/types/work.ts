import { Slug, TypedObject } from "sanity"

export type Work = {
    title: string,
    _id: string,
    description_block: TypedObject[] | TypedObject
    objectFile: string,
}
  
export type WorkBatch = Work[]