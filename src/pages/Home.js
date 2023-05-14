import React from "react";

// components
import Sidebar from "../components/sidebar/Sidebar";
import ChatPage from "../components/chatpage/ChatPage";

// contexts

const Home = () => {
  return (
    <div className="home w-[1000px] h-[650px] bg-gray-dark rounded-3xl flex gap-4 p-4">
      <Sidebar />
      <ChatPage />
    </div>
  );
};

export default Home;
