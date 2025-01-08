import React, { use, useMemo, useState } from 'react';
import { retrieveContent } from '../../../sanity/lib/utils/fetchPosts';
import { client } from '../../../sanity/lib/utils/sanityClient';
import { WorkBatch } from 'sanity/lib/types/work';
import PreviewObject from './PreviewObject';
import { urlBuilder } from '@/helpers/utils/sanityUrlBuilder';




export const TestSanity = () => {
    const [data, setData] = useState<WorkBatch>([])

    useMemo(async () => {
        const data = await retrieveContent(client)
        return setData(data)
    }, [])

    return (
        <div className='h-dvh'>
            <div className='relative grid h-full grid-cols-2 gap-[10px] md:grid-cols-3'>
                {data && data.map((post, index) => (
                    <PreviewObject key={index} value={urlBuilder(post.objectFile.asset._ref)} />
                ))}
            </div>
        </div >
    );
};
