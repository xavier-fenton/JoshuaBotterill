import { SanityClient, SanityDocument } from "next-sanity"

const PROJECT_QUERY = `*[_type == "post"]`

export const retrieveContent = async (client: SanityClient): Promise< any[] | void> => {
    try {
        const response = await client.fetch(PROJECT_QUERY)
        console.log("response: ", response);
        
        return response

    } catch (error: unknown) {
        const e = !(error instanceof Error)
        ? Error(error as string)
        : error

        console.error(e)
        console.trace(e)
    }
}