import React, { useContext, useEffect, useRef } from "react";
import {timeConverter} from "../../helper/functions"

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

  console.log(msg)
  return (
    <div ref={message} className={`message flex items-center gap-3 mb-6 ${msg.senderId === user.uid && "owner"}`}>
      <div className="user-info flex flex-col justify-center gap-1 self-end">
        <img className="w-12 rounded-xl" src={msg.senderId === user.uid ? user.photoURL : data.user.photoURL} alt="" />
      </div>
      <div className="message-content relative text-[#fff] bg-gray-light max-w-[80%] flex flex-col p-1 gap-1 rounded-2xl rounded-bl-none">
        {msg.image && <img className="w-60 rounded-2xl" src={msg.image} alt="" />}
        <p className="max-w-fit py-1 px-3 pb-4 rounded-lg">{msg.text}</p>
        <span className={`time absolute text-[11px] bottom-[2px] ${msg.senderId === user.uid && "owner"}`}>{timeConverter(msg.date?.seconds)}</span>
      </div>
    </div>
  );
};

export default Message;
