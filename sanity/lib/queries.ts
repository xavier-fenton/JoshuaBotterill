import { defineQuery } from 'next-sanity'

export const WORKS_QUERY = defineQuery(`*[_type == "works"]{_id, title, objectFile, slug}`)

export const FILES_QUERY = defineQuery(`*[_type == "sanity.fileAsset"]`)