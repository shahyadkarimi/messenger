import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

// components
import Message from "./Message";
import Loading from "../Loading";

// context
import { chatContext } from "../../contexts/ChatContext";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data } = useContext(chatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    setLoading(false);

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages relative w-full h-[calc(100%-110px)] lg:h-[calc(100%-100px)] p-2 overflow-y-scroll overflow-x-hidden">
      {loading && (
        <div className="absolute flex justify-center items-center w-full h-full bg-gray-dark left-0 top-0 z-50">
          <Loading />
        </div>
      )}
      {messages.map((m) => (
        <Message msg={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
