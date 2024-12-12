import { defineQuery } from 'next-sanity'

export const WORKS_QUERY = defineQuery(`*[_type == "works"]`)