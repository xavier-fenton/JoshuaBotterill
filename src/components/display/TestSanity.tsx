import React, { use, useMemo, useState } from 'react';
import { retrieveContent } from '../../../sanity/lib/utils/fetchPosts';
import { client } from '../../../sanity/lib/utils/sanityClient';
import { WorkBatch } from 'sanity/lib/types/work';
import { buildFilePath } from "@sanity/asset-utils"
import { dataset, projectId, apiVersion } from '../../../sanity/env';
import PreviewObject from './PreviewObject';

type ConfigType = {
    projectId: string,
    dataset: string,
    apiVersion: string
}


const builderConfig = { projectId: projectId, dataset: dataset, apiVersion: apiVersion }

/* 
    Url Builder for getting GLB files from CDN
    'https://apicdn.sanity.io/files/<projectId>/<dataset>/<file_src>'
*/
function createFilePath(config: ConfigType, src: string) {

    const newSrc = src.replace('file-', '').replace('-glb', '.glb')
    return `https://apicdn.sanity.io/files/${config.projectId}/${config.dataset}/${newSrc}`
}

const urlBuilder = (src: string): string => {
    const url = createFilePath(builderConfig, src)
    return url
}


const TestSanity = () => {
    const [data, setData] = useState<WorkBatch>([])

    useMemo(async () => {
        const data = await retrieveContent(client)
        return setData(data)
    }, [])

    return (
        <div className='h-dvh'>
            <div className='h-full'>
                {data && data.map((post, index) => (
                    <PreviewObject key={index} value={urlBuilder(post.objectFile.asset._ref)} />
                ))}
            </div>
        </div >
    );
};

export default TestSanity;