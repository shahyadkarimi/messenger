import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

// components
import Message from "./Message";

// context
import { chatContext } from "../../contexts/ChatContext";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(chatContext);
    console.log(data)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc)=> {
        doc.exists() && setMessages(doc.data().messages)
    })

   return (
       unsub()
   )
  }, [data.chatId]);

  return (
    <div>
      {messages.map(m => {
        <Message msg={m} />
      })}
    </div>
  );
};

export default Messages;
