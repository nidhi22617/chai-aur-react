import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/nidhi22617') 
    //  .then(response => response.json())
    //  .then(data => {
    //     // console.log(data);
    //     setData(data)    
    //  }) 
    // }, [])
    
  return (
    <div className=' w-2/3  text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers} 
    <div className='m-4 flex '>
    <img src= {data.avatar_url} alt="Git Picture" width={300} />
    </div>
    
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/nidhi22617')
    return response.json()
}