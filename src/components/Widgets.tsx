import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Widgets() {
  return (
    <div className='xl:w-[600px] hidden lg:inline ml-8 space-y-5'>
        <div className='w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50'>
            <div className='flex items-center p-3 rounded-full bg-red-300 relative'>
                <MagnifyingGlassIcon className='h-5 z-50 text-gray-500' />
                <input className='absolute inset-0 rounded-full pl-11 boder-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-200' type="text" placeholder='Search Twitter' />
            </div>
        </div>
    </div>
  )
}
