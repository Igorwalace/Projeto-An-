

//react
import React from 'react'
import Link from 'next/link'

//pages
import Side_Categories from './side-categories'
import Logo from './logo'

const Side_Category_Home = () => {
    return (
        <>
            <div className='hidden md:block w-1/4' >
                <div className='border-b-[var(--cinza) border-b-2 pb-4 flex items-center justify-center px-1' >
                    <Link className='rounded-md bg-[var(--verde)] hover:scale-[1.01] duration-200 text-white py-2 w-full flex imtems-center justify-center' href='/'>Escreva uma história</Link>
                </div>
                <div className='my-3 px-1 border-b-[var(--cinza) border-b-2 pb-4' >
                    <h1 className='text-[var(--cinza)] mb-3' >Explorar</h1>
                    <Side_Categories />
                </div>
                <div className='my-3 text-left px-2' >
                    <Logo />
                </div>
            </div>

        </>
    )
}

export default Side_Category_Home