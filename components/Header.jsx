import { assets } from '../assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="h-20 flex items-center justify-center mb-3 md:mb-0 md:justify-start md:px-5">
        <h1 className='text-sage-dark font-bold text-2xl w-30 md:w-28 cursor-pointer md:ml-10'>maxene.</h1>
        {/* <a href="">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-20 md:w-28 cursor-pointer ml-4 md:ml-10"
          />
        </a> */}
    </header>
    </>
  )
}

export default Header
