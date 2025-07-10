import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full border-b py-3 flex justify-between px-2 items-center'>
        <div className='mx-5'>
            <h1 className='text-2xl font-bold font-[bahnschrift] bg-yellow-100 py-1 px-3 rounded-md'>FOODAPP</h1>
        </div>
        <div className='flex flex-row gap-10 px-3 items-center'>
            <Link href={"/"} >Home</Link>
            <Link href={"/contact"}>Contact</Link>
            <input className='p-1 w-[250px] rounded-lg border' placeholder='search...'></input>
            <Link href={'/cart'}>Cart</Link>
        </div>
    </div>
  )
}

export default Header