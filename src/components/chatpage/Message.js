import React from 'react'

// images
import avatar from "../../images/profile-avatar.jpg"
import nature from "../../images/nature.jpg"

const Message = () => {
    return (
        <div className="message owner flex items-center gap-3 mb-6">
            <div className="user-info flex flex-col justify-center gap-1 self-end">
                <img className="w-12 rounded-md" src={avatar} alt="" />
            </div>
            <div className="message-content text-[#fff] bg-gray-light max-w-[80%] flex flex-col p-1 gap-1 rounded-md rounded-bl-none">
                <img className="w-60 rounded-lg" src={nature} alt="" />
                <p className="max-w-fit p-2 rounded-lg">Hello</p>
            </div>
        </div>
    )
}

export default Message;
