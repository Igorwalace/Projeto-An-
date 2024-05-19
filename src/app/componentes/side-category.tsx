
//react
import React from 'react'

//pages
import Side_Categories from './side-categories'
import Logo from './logo'
import Button_New_Story from './button-new-story'

interface PropsCheck {
    hidden?: boolean
    width?: boolean
    tagsCenter?:boolean
}

const Side_Category_Home = ({ hidden, width, tagsCenter }: PropsCheck) => {
    return (
        <>
            <div className={`${width ? 'w-1/4' : 'w-full' } ${hidden ? 'hidden md:block' : ''}`} >
                <Button_New_Story />
                <div className='my-3 px-1 border-b-[var(--cinza) border-b-2 pb-4 border-t-[var(--cinza) border-t-2 pt-4' >
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