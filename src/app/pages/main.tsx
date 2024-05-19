//react
import React from 'react'

//fonts
import { LibraryBig } from 'lucide-react'

//pages
import Storys from '../componentes/storys'
import Side_Category_Home from '../componentes/side-category'

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

                <Side_Category_Home width={true} hidden={true} tagsCenter={false} />
            </main>
        </>
    )
}

export default Main