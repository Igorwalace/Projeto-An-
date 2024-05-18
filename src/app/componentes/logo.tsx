
//fonts
import { russo_One } from '../../../fonts'

//react
import React from 'react'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href='/' className='hover:scale-105 duration-200 text-[var(--verde)]'>
            {/* logo */}
            <h1 className={`font-black md:text-3xl text-2xl ${russo_One.className} `} >Anõ</h1>
        </Link>
    )
}

export default Logo