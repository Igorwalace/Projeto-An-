// react
import React from 'react'

//icons
import { ChevronLeft, ChevronRight } from 'lucide-react'

//pages
import Logo from '../componentes/logo'
import Button_Back from '../componentes/button-back'
import Tags_Header from '../componentes/tags-header'
import Menu from '../menu/menu'

interface PropsHeader {
  tags?: boolean
  buttonBack?: boolean
}

const Header = ({ tags, buttonBack }: PropsHeader) => {

  return (
    <>
      <header>

        <nav className='flex items-center justify-between text-[var(--verde)] ' >
          {
            buttonBack &&
            <>
              <div className='flex items-center justify-center md:gap-0 gap-3' >
                <Button_Back />
                <Logo />
              </div>
            </>
          }
          {
            buttonBack != true &&
            <Logo />
          }
          <Menu />
        </nav>

        {
          tags &&
          <div className='flex justify-between items-center md:mt-5 mt-3 w-full' >
            <p className='block lg:hidden text-[var(--verde)] font-bold text-base whitespace-nowrap rounded-md pr-1 py-1 pl-0 md:mr-2 -ml-2 bg-white bg-[rgba(196,196,196,0.1)]' ><ChevronLeft /></p>
            <main className='flex justify-between items-center md:gap-10 gap-6 text-[var(--cinza)] md:text-sm text-xs lg:overflow-x-hidden overflow-x-auto scrollbar-hide lg:w-full w-[90%] md:h-5 h-5 ' >
              <Tags_Header />
            </main>
            <button className='block lg:hidden text-[var(--verde)] font-bold text-base whitespace-nowrap rounded-md pl-1 px-1 md:ml-2 -mr-2 bg-white bg-[rgba(196,196,196,0.1)]' ><ChevronRight /></button>
          </div>
        }

      </header>
    </>
  )
}

export default Header
