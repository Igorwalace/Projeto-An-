//react
import React from 'react'

//pages
import Header from './header'
import Main from './main'
import Footer from './footer'

const Home = () => {
    return (
        <>
            <main>
                <div className='md:px-24 md:py-5 px-10 py-3 bg-white' ><Header tags={true} /></div>
                <div className='md:px-24 md:py-5 ' ><Main /></div>
                <div><Footer /></div>
            </main>
        </>
    )
}

export default Home