import React from 'react';
import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import {HomeIcon} from '@heroicons/react/24/solid';
import {BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalCircleIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div>

        {/* Twitter logo */}
        <div className='hoverEffect'>
            <Image width={50} height={50} src="/twitter-logo.png"></Image>
        </div>


        {/* Menu */}
        <div className=''>
            <SidebarMenuItem text="Home" Icon={HomeIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Notifications" Icon={BellIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Messages" Icon={InboxIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon}></SidebarMenuItem>
            <SidebarMenuItem text="Profile" Icon={UserIcon}></SidebarMenuItem>
            <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon}></SidebarMenuItem>
        </div>


        {/* Button */}
        <button>Tweet</button>


        {/* Mini Profile */}
        <div className=''>
            <img className='rounded-full w-20' src="https://avatars.githubusercontent.com/u/58715385?v=4" alt="user-img" />
            <div className=''>
                <h4>Emrah Bozkurt</h4>
                <p>@mrhbozkurt</p>
            </div>
            <EllipsisHorizontalCircleIcon className='h-5'></EllipsisHorizontalCircleIcon>
        </div>
      
    </div>
  )
}
