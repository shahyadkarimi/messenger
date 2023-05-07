import React from 'react'

// images
import avatar from "../../images/profile-avatar.jpg"

const Friends = () => {
    return (
        <div className="friends w-full relative flex items-center gap-3 hover:bg-gray-light cursor-pointer p-3 rounded-2xl transition-all duration-200">
            <img src={avatar} className="w-12 rounded-md" alt="" />
            <div className="profile-info">
                <h2 className="profile-name text-light">Shahyad</h2>
                <p className="last-msg text-[12.5px] text-[#9c9c9c] mt-1">hello my friend</p>
            </div>
            <span className="msg-time text-[12px] text-[#9c9c9c] absolute top-4 right-3">4 m</span>
        </div>
    )
}

export default Friends