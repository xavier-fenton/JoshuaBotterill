import { SanityClient, SanityDocument } from "next-sanity"
import type { postType } from "sanity/schemaTypes/postType"
const PROJECT_QUERY = `*[_type == "works"]`

export const retrieveContent = async (client: SanityClient): Promise<typeof postType> => {
    try {
        const response = await client.fetch(PROJECT_QUERY)
        return response

    } catch (error: unknown) {
        const e = !(error instanceof Error)
        ? Error(error as string)
        : error
        console.error(e)
        console.trace(e)
    }
}