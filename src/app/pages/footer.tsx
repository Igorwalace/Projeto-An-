import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='fixed -bottom-1 left-0 md:left-0 right-0 bg-white text-[var(--cinza)] py-2 pl-10 md:pl-28 flex md:items-center items-start justify-start md:gap-3 md:flex-row flex-col md:text-base text-sm' >
                <span>Desenvolvido por <Link href="https://meu-website-igor.vercel.app/" target='_blank' className='text-[var(--verde)] underline' >Igor Wallace</Link></span>
                <span className='hidden md:inline-block' > / </span>
                <span>Inspirado em <Link href="https://www.freespaace.com/" target='_blank' className='text-[#045ECF] underline ' >Freespace</Link></span>
            </footer>
        </>
    )
}

export default Footer