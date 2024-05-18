import React from 'react'
import Header from './header'
import Main from './main'

const Home = () => {
    return (
        <>
            <main>

                <div className='md:px-24 md:py-5 px-10 py-3 bg-white' ><Header /></div>
                <div className='md:px-24 md:py-5 px-10 py-3' ><Main /></div>

            </main>
        </>
    )
}

export default Home