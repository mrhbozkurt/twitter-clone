import { SparklesIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Input from './Input';
import Post from './Post';

export default function Feed() {

    const posts = [
        {
            id: "1",
            name: "Emrah Bozkurt",
            username: "mrhbozkurt",
            userImg: "https://avatars.githubusercontent.com/u/58715385?v=4",
            img: "https://plus.unsplash.com/premium_photo-1669446008871-fc638b9dec04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Nice view!",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Emrah Bozkurt",
            username: "mrhbozkurt",
            userImg: "https://avatars.githubusercontent.com/u/58715385?v=4",
            img: "https://images.unsplash.com/photo-1713719318459-493d3e37533e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Woww!",
            timestamp: "2 days ago"
        }
    ]


  return (
    <div className='xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                <SparklesIcon className='h-5' />
            </div>
        </div>

        <Input />

        {posts.map((post) => (
            <Post key={post.id} post={post} />
        ))}
        
    </div>
  )
}
