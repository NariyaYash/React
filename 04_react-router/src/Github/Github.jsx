import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/nariyayash').then((data) => data.json()).then((data) => {
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Github followers: {data.followers}
                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Public Repos: {data.public_repos}
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    let data = await fetch('https://api.github.com/users/nariyayash').then((data) => data.json())
    return data;
}