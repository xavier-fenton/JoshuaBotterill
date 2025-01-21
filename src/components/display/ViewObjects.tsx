import React, { cache, use, useEffect, useMemo, useState } from 'react';
import { retrieveContent } from '../../../sanity/lib/utils/fetchPosts';
import { client } from '../../../sanity/lib/utils/sanityClient';
import { Work, WorkBatch } from 'sanity/lib/types/work';
import UploadedObject from './UploadedObject';
import { urlBuilder } from '@/helpers/utils/sanityUrlBuilder';




export const ViewObjects = () => {
    const [data, setData] = useState<WorkBatch>([])

    useMemo(() => {                
        retrieveContent(client).then((data) => {
            setData(data)
        }).catch((error) => console.error(error))
    },[])

    return (
        <div className='h-dvh'>
            <div className='relative grid h-full grid-cols-2 gap-[5px] md:grid-cols-3'>
                {data && data.map((object: Work, index) => (
                    <UploadedObject objectData={object} key={index} source={urlBuilder(object.objectFile.asset._ref)} />
                ))}
            </div>
        </div >
    );
};
