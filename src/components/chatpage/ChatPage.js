import React, { useContext, useEffect, useState } from "react";

// components
import Messages from "./Messages";
import SendMsg from "./SendMsg";

// context
import { chatContext } from "../../contexts/ChatContext";

const ChatPage = () => {
  const [showMessage, setShowMessage] = useState(true)
  
  const { data } = useContext(chatContext);


  const backHandler = () => {
    data.chatId = "null"
    data.user = {}

    setShowMessage(false)
  }

  useEffect(() => {
    return () =>{
      setShowMessage(true)
    }

  }, [showMessage])

  return (
    <div
      className={`chat-page p-2 lg:py-0 w-full lg:w-[70%] lg:px-10 ${
        !data.user.displayName && "flex justify-center items-center"
      }`}
    >
      {data.user.displayName ? (
        <>
          <div className="user-info h-12 flex justify-between items-center mb-3">
            <div className="left-side flex items-center gap-2 ">
              <button
                onClick={backHandler}
                className="back mr-3 bg-gray-light w-9 h-9 rounded-xl flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 stroke-light"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
              </button>
              <img
                src={data.user?.photoURL}
                className="w-12 h-12 object-cover rounded-xl"
                alt=""
              />
              <div className="name-status">
                <h2 className="username text-light text-lg">
                  {data.user?.displayName}
                </h2>
                <span className="text-[#9c9c9c] text-sm block">online</span>
              </div>
            </div>
            <div className="right-side flex items-center gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-light"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 fill-light"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-light"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </div>
          </div>
          {showMessage && <Messages />}
          <div>
            <SendMsg />
          </div>
        </>
      ) : (
        <h2 className="text-light text-lg">
          Which friend do you want to chat with?
        </h2>
      )}
    </div>
  );
};

export default ChatPage;
