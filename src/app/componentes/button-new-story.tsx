'use client'
import Link from 'next/link'
import React from 'react'

const Button_New_Story = () => {
  return (
    <>
      <div className='flex items-center justify-center' >
        <Link className='rounded-md bg-[var(--verde)] hover:scale-[1.01] text-sm md:text-base duration-200 text-white py-2 w-full flex imtems-center justify-center' href='/'>Escreva uma nova história</Link>
      </div>
    </>
  )
}

export default Button_New_Story