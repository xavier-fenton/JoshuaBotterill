import { SanityClient, SanityDocument } from "next-sanity"
import { WorkBatch } from "../types/work"

import { WORKS_QUERY, FILES_QUERY } from "../queries"

export const retrieveContent = async (client: SanityClient): Promise<WorkBatch> => {
    try {
        const response = await client.fetch(WORKS_QUERY) as WorkBatch
        return response

    } catch (error: unknown) {
        const e = !(error instanceof Error)
        ? Error(error as string)
        : error
        console.error(e)
        console.trace(e)
    }
}