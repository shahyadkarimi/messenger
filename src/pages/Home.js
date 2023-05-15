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
    <div className="home relative w-full h-full lg:w-[1000px] lg:h-[650px] bg-gray-dark lg:rounded-3xl flex lg:gap-4 lg:p-4">
      {loading && <Loading />}
      <Sidebar />
      <ChatPage />
    </div>
  );
};

export default Home;
