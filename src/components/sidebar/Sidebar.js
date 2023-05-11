import React from 'react'

// components
import Search from "./Search"
import Friends from './Friends'
import Profile from './Profile'

const Sidebar = () => {
    return (
        <div className="sidebar w-[35%] h-full flex flex-col gap-3 bg-slate-800">
            <Profile />
            <Search />
            <div className="all-friends flex flex-col gap-2 pr-2 overflow-y-scroll">
                <Friends />
                <Friends />
                <Friends />
                <Friends />
                <Friends />
                <Friends />
                <Friends />
                <Friends />
                <Friends />
                <Friends />
                <Friends />
                <Friends />
            </div>
        </div>
    )
}

export default Sidebar
