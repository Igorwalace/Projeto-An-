//react
import React from 'react'
import Link from 'next/link'

//fonts
import { LibraryBig } from 'lucide-react'

//pages
import Logo from '../componentes/logo'
import Storys from '../componentes/storys'
import Side_Categories from '../componentes/side-categories'

const Main = () => {
    return (
        <>
            <main className='text-[#212529] md:flex items-start justify-center' >

                <div className='w-full' >
                    <div className='flex items-center gap-1 md:text-xl text-lg font-bold md:mb-5 px-10 py-3 ' >
                        <span> <LibraryBig /> </span>
                        <h1 >Mais Recentes</h1>
                    </div>

                    <Storys />
                </div>

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

            </main>
        </>
    )
}

export default Main