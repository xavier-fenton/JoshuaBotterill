import React, { use, useMemo, useState } from 'react';
import { retrieveContent } from '../../../sanity/lib/utils/fetchPosts';
import { client } from '../../../sanity/lib/utils/sanityClient';
import { WorkBatch } from 'sanity/lib/types/work';

const TestSanity = () => {
    const [data, setData] = useState<WorkBatch>([])

    useMemo(async () => {
        const data = await retrieveContent(client)

        return setData(data)
    }, [])

    return (
        <div className='h-dvh'>
            hello
            <ul>
                {data && data.map((post) => (
                    <li key={post._id}>
                        <a>{post?.title}</a>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default TestSanity;