// 'use client'
// import { useState, useMemo, createContext, useEffect } from "react"

// import { WorkBatch } from "../sanity/lib/types/work"
// import { initClient } from "../sanity/lib/utils/sanityClient"
// import { retrieveContent } from "../sanity/lib/utils/fetchPosts"

// export const DataContext = createContext({})


// export default function DataProvider({children}: Readonly<{children: React.ReactNode}>) {
//     const [objectBatch, setObjectBatch] = useState<WorkBatch>([])
//     const client = initClient()
//     console.log('objbatch', objectBatch);
    
  
//     if(!client) {
//       throw new Error("Failed to instantiate Sanity client.")
//     }

//     useMemo(async () => {
//       const data = await retrieveContent(client) 
//       console.log(data);
      
//       return setObjectBatch(data)
//     }, [])
    
//     console.log('objdata after: ', objectBatch);
    

//     if(!objectBatch) {
//       throw new Error("Failed to retrieve data.")
//     }
  
//     return(
//         <DataContext.Provider value={{objectBatch}}>
//             {children}
//         </DataContext.Provider>
//     )
}