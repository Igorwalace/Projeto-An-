'use client'
// react
import React, { useState } from 'react'

//shadcn
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

// icons
import { AlignRight } from 'lucide-react'

//pages
import Logo from '../componentes/logo'
import Side_Category_Home from '../componentes/side-category'


const Menu = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <>
            <button className='hover:scale-105 duration-200' onClick={()=>setIsOpenMenu(true)} >
                <span><AlignRight /></span>
            </button>
            <Sheet open={isOpenMenu} onOpenChange={setIsOpenMenu} >
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='flex items-center justify-between border-b-[var(--cinza)] border-b-[1px] pb-2' >
                            <span className='md:text-base text-base' >Menu</span>
                        </SheetTitle>
                    </SheetHeader>
                    <div className='my-5' >
                        <div className='flex items-center justify-between' >
                            <button className='border-[var(--verde)] text-[var(--verde)] border-[1px] p-[6px] px-4 rounded-xl hover:scale-105 duration-200 text-sm' >Login</button>
                            <button className='bg-[var(--verde)] p-2 px-3 rounded-xl text-white hover:scale-105 duration-200 text-sm' >Registrar</button>
                        </div>
                    </div>
                    <div className="my-5">
                        <Side_Category_Home hidden={true}  />
                    </div>
                </SheetContent>
            </Sheet>

        </>
    )
}

export default Menu