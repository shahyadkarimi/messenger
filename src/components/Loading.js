import React from 'react'

const Loading = () => {
    return (
        <div className="loading-wrraper flex justify-center items-center absolute w-full h-full bg-gray-dark left-0 top-0 z-20">
            <span className="loader"></span>
        </div>
    )
}

export default Loading;
