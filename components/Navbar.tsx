import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image
          src="/car.png"
          alt="Turbo Guido"
          width={90}
          height={20}
          className='object-contain'
          />
          <h1 className='text-[#2f4f4f] text-3xl font-semibold'>TurboGuido</h1>
        </Link>

        <CustomButton 
        title="sign-in"
        btntype="button"
        containerStyles='text-[#2f4f4f] rounded-full bg-white font-bold min-w-[130px] '
        isDisabled = {false}/>
      </nav>
    </header>
  )
}

export default Navbar