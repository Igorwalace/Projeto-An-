import React from 'react'

const Loading = () => {
    return (
        <div className="fixed bottom-0 left-0 top-0 right-0 flex items-center justify-center z-50">
            <span className="loader absolute md:bottom-10 md:right-10 bottom-5 right-7"></span>
        </div>
    )
}

export default Loading