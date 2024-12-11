import React, { use, useMemo, useState } from 'react';
import { initClient } from '@/utils/sanityClient';
import { POSTS_QUERY } from '../../../sanity/lib/queries';
import { retrieveContent } from '@/utils/fetchPosts';
import { SanityClient } from 'sanity';


const client = initClient()

export async function getContent() {
    const posts = await retrieveContent(client)


    return { posts }
}

const TestSanity = () => {
    const [data, setData] = useState<any[] | void>([])

    useMemo(async () => {
        const data: any[] | void = await retrieveContent(client)
        console.log(data);

        return setData(data)
    }, [])

    return (
        <div className='h-dvh'>
            hello
            <ul>
                {data.map((post) => (
                    <li key={post._id}>
                        <a>{post?.title}</a>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default TestSanity;