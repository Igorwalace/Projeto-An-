'use client'
//react
import Link from 'next/link'
import React, { useState } from 'react'

//pages
import ModalEmBreve from './modal-em-breve'

const Button_New_Story = () => {

  const [isOpenModalBreve, setIsOpenModalBreve] = useState(false)

  const handleModalEmBreve = () => {
    setIsOpenModalBreve(true)
  }

  return (
    <>
      <div className='flex items-center justify-center' >
        <button className='rounded-md bg-[var(--verde)] hover:scale-[1.01] text-sm md:text-base duration-200 text-white py-2 w-full flex imtems-center justify-center' onClick={handleModalEmBreve} >Escreva uma nova história</button>
      </div>
      <ModalEmBreve
        isOpenModalBreve={isOpenModalBreve}
        setIsOpenModalBreve={setIsOpenModalBreve}
      />
    </>
  )
}

export default Button_New_Story