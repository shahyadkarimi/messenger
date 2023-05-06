import React from 'react'

// components
import Sidebar from "../components/Sidebar" 
import ChatPage from "../components/ChatPage" 

const Home = () => {
    return (
        <div className="home w-[1000px] h-[650px] bg-gray-dark rounded-3xl flex">
            <Sidebar />
            <ChatPage />
        </div>
    )
}

export default Home
