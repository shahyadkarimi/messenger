import React from 'react'

const Search = () => {
    return (
        <div className="search w-full relative">
            <input className="w-full py-3 pl-10 pr-3 text-light bg-gray-light rounded-xl outline-none border-none placeholder:text-light" placeholder="Search" type="text" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-light absolute top-2/4 -translate-y-2/4 left-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

        </div>
    )
}

export default Search
