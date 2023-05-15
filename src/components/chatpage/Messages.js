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

    setLoading(false)

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages relative w-full h-[calc(100%-100px)] pr-2 overflow-y-scroll">
      {loading && <Loading />}
      {messages.map((m) => (
        <Message msg={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
