import React, { useContext, useEffect, useRef } from "react";

// context
import { authContext } from "../../contexts/AuthContext";
import { chatContext } from "../../contexts/ChatContext";

const Message = ({ msg }) => {
  const { user } = useContext(authContext);
  const { data } = useContext(chatContext);

  const message = useRef()

  useEffect(() => {
    message.current?.scrollIntoView({behavior: "smooth"})
  }, [msg])


  return (
    <div ref={message} className={`message flex items-center gap-3 mb-6 ${msg.senderId === user.uid && "owner"}`}>
      <div className="user-info flex flex-col justify-center gap-1 self-end">
        <img className="w-12 rounded-md" src={msg.senderId === user.uid ? user.photoURL : data.user.photoURL} alt="" />
      </div>
      <div className="message-content text-[#fff] bg-gray-light max-w-[80%] flex flex-col p-1 gap-1 rounded-md rounded-bl-none">
        {msg.image && <img className="w-60 rounded-lg" src={msg.image} alt="" />}
        <p className="max-w-fit p-2 rounded-lg">{msg.text}</p>
      </div>
    </div>
  );
};

export default Message;
