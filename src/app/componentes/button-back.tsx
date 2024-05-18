'use client'

//icons
import { ArrowLeft } from 'lucide-react'

//react
import { useRouter } from 'next/navigation'
import React from 'react'

const Button_Back = () => {


    const router = useRouter()

    const handleBack = () => {
        router.back()
    }


    return (
        <>
            <button onClick={handleBack} className='relative -left-3 flex items-center justify-center' ><ArrowLeft /></button>
        </>
    )
}

export default Button_Back