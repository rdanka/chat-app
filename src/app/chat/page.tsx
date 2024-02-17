"use client"
import Sidebar from '@/components/Sidebar';
import React, { useEffect, useState } from 'react'
import Chat from '@/components/Chat';


const Page = () => {
   
    return (
        <main className='flex w-full h-screen'>
            <Sidebar />
            <div className='flex-grow flex flex-col items-center  bg-[#2B2D31]'>
               <Chat />
            </div>
      </main>
    )
}

export default Page
