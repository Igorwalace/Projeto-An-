// react
import React from 'react'

//icons
import { AlignRight } from 'lucide-react'

//pages
import Logo from '../componentes/logo'
import Button_Back from '../componentes/button-back'
import Tags_Header from '../componentes/tags-header'

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

          <button className='hover:scale-105 duration-200' >
            <span><AlignRight /></span>
          </button>
        </nav>

        {
          tags &&
          <div className='flex justify-between items-center mt-5 w-full' >
            <main className='flex justify-between items-center md:gap-10 gap-4 text-[var(--cinza)] md:text-sm text-xs overflow-x-auto scrollbar-hide lg:w-full w-[90%] md:h-5 h-5 ' >
              <Tags_Header />
            </main>
            <button className='block lg:hidden text-[var(--verde)] font-bold md:text-base text-sm whitespace-nowrap pl-2 bg-white' >Ver tudo</button>
          </div>
        }

      </header>
    </>
  )
}

export default Header
