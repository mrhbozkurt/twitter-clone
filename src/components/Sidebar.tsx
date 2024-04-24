import React from 'react';
import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import {EllipsisHorizontalIcon, HomeIcon} from '@heroicons/react/24/solid';
import {BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalCircleIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>

        {/* Twitter logo */}
        <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
            <Image width={50} height={50} src="/twitter-logo.png"></Image>
        </div>


        {/* Menu */}
        <div className='mt-4 mb-2.5 xl:items-start'>
            <SidebarMenuItem text="Home" Icon={HomeIcon} active></SidebarMenuItem>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Notifications" Icon={BellIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Messages" Icon={InboxIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Profile" Icon={UserIcon}></SidebarMenuItem>
            <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon}></SidebarMenuItem>
        </div>


        {/* Button */}
        <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>


        {/* Mini Profile */}
        <div className='hoverEffect text-gray-700 flex items-center justify-center'>
            <img className='rounded-full w-10 h-10 xl:mr-2' 
            src="https://avatars.githubusercontent.com/u/58715385?v=4" 
            alt="user-img" />
            <div className='leading-5'>
                <h4 className='font-bold'>Emrah Bozkurt</h4>
                <p className='text-gray-500'>@mrhbozkurt</p>
            </div>
            <EllipsisHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline'></EllipsisHorizontalIcon>
        </div>
      
    </div>
  )
}
