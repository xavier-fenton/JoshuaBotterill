import {createClient, type ClientConfig} from "@sanity/client"
import { SanityClient } from "sanity"

export const initClient = (): SanityClient | void => {
    try {
        const config: ClientConfig = {
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, 
            useCdn: true, // `false` if you want to ensure fresh data
            apiVersion: "2024-06-26"
        }   
    
        const client: SanityClient = createClient(config)
    
        return client
        
    } catch (error: unknown) {
        const e = !(error instanceof Error)
        ? Error(error as string)
        : error

        console.error(e)
        console.trace(e)
    }
}