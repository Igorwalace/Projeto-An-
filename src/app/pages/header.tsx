// react
import React from 'react'

//icons
import { AlignRight } from 'lucide-react'

// pages testes
import { Teste } from '../teste/testeArray'
import Logo from '../componentes/logo'

const Header = () => {
  return (
    <>
      <header>

        <nav className='flex items-center justify-between text-[var(--verde)] ' >
          <Logo />

          <button className='hover:scale-105 duration-200' >
            <span><AlignRight /></span>
          </button>
        </nav>

        <div className='flex justify-between items-center mt-5 w-full' >
          <main className='flex justify-between items-center md:gap-10 gap-4 text-[var(--cinza)] md:text-sm text-xs overflow-x-auto scrollbar-hide lg:w-full w-[90%]' >
            {
              Teste.map((name: any, index: any) => (
                <div key={index} >
                  <button className='font-medium' >{name.name}</button>
                </div>
              ))
            }

          </main>
          <button className='block lg:hidden text-[var(--verde)] font-bold md:text-base text-sm whitespace-nowrap pl-2 bg-white' >Ver tudo</button>
        </div>

      </header>
    </>
  )
}

export default Header