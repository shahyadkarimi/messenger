import React, { useState } from "react";

// components
import Sidebar from "../components/sidebar/Sidebar";
import ChatPage from "../components/chatpage/ChatPage";
import Loading from "../components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  console.log(loading);
  return (
    <div className="home relative w-[1000px] h-[650px] bg-gray-dark rounded-3xl flex gap-4 p-4 overflow-hidden">
      {loading && <Loading />}
      <Sidebar />
      <ChatPage />
    </div>
  );
};

export default Home;
