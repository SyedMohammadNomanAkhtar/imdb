import React from 'react'
import MenuItem from './MenuItem'
import {LuHome} from 'react-icons/lu'
import {BsInfoSquare} from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
            <MenuItem title="HOME" address="/" Icon={LuHome} />
            <MenuItem title="ABOUT" address="/about" Icon={BsInfoSquare} />
        </div>
        <div className=''>
          <Link href="/">
            <h1 className='text-2xl'>
              <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDB</span>
              <span className='text-xl hidden sm:inline'>Clone</span>
            </h1>
          </Link>
        </div>
    </div>
  )
}
