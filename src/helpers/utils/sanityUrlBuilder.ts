import { dataset, projectId, apiVersion } from '../../../sanity/env';


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

export const urlBuilder = (src: string): string => {
    const url = createFilePath(builderConfig, src)
    return url
}