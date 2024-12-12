import React, { use, useMemo, useState } from 'react';
import { initClient } from 'sanity/lib/utils/sanityClient';
import { retrieveContent } from 'sanity/lib/utils/fetchPosts';


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