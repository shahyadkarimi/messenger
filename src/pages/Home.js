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

  return (
    <div className="home relative w-full h-full lg:w-[1000px] lg:h-[650px] bg-gray-dark lg:rounded-3xl flex lg:gap-4 lg:p-4 overflow-hidden">
      {loading && (
        <div className="absolute flex justify-center items-center w-full h-full bg-gray-dark left-0 top-0 z-50">
          <Loading />
        </div>
      )}
      <Sidebar />
      <ChatPage />
    </div>
  );
};

export default Home;
