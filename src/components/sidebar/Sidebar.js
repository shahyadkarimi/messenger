import React from 'react'

// components
import Search from "./Search"
import Friends from './Friends'

const Sidebar = () => {
    return (
        <div className="sidebar w-[35%] bg-slate-800">
            <Search />
            <div className="all-friends h-[555px] flex flex-col gap-2 mt-4 pr-2 overflow-y-scroll">
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
