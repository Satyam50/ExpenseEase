"use client"
import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { useUser,UserButton } from "@clerk/nextjs";
import Link from 'next/link';
function Header() {

  const {user,isSignedIn}=useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
        />
       {isSignedIn?
        <UserButton/> : 
        <div className='flex gap-3 items-center'>
          <Link href={'/dashboard'}>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-indigo-100 bg-indigo-200 hover:bg-indigo-400 hover:text-white h-10 px-4 py-2">Dashboard</button>
            </Link>
        <Link href={'/sign-in'}>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-red-500 bg-red-500 hover:bg-red-700 hover:text-white h-10 px-4 py-2 text-white">Get Started</button>
        </Link>
        </div>
      }
       
    </div>
  )
}

export default Header