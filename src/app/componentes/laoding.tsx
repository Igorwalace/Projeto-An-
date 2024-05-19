//react
import React from 'react'

const Loading = () => {
    return (
        <div className="fixed bottom-0 left-0 top-0 right-0 flex items-center justify-center z-50">
            <span className="loader absolute md:top-5 md:right-24 top-3 right-10"></span>
        </div>
    )
}

export default Loading

//md:px-24 md:py-5 px-10 py-3