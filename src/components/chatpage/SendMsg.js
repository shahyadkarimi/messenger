import React, { useContext, useState } from "react";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";

// context
import { authContext } from "../../contexts/AuthContext";
import { chatContext } from "../../contexts/ChatContext";

const SendMsg = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const { user } = useContext(authContext);
  const { data } = useContext(chatContext);

  const sendHandler = async () => {
    if ((image)) {
      // create a ref and image name
      const storageRef = ref(storage, uuid());
      // upload image
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        (err) => {
          console.log(err);
        },
        () => {
          // get uploaded image download link
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: user.uid,
                date: Timestamp.now(),
                image: downloadURL,
              }),
            });
            setText("");
            setImage(null);
          });
        }
      );
    } else {
      if (text) {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: user.uid,
            date: Timestamp.now(),
          }),
        });
        setText("");
        setImage(null);
      }
    }
    if (text) {
      // current user
      await updateDoc(doc(db, "userChats", user.uid), {
        [data.chatId + ".lastmessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      // other user
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastmessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
    }
  };

  return (
    <div className="SendMsg">
      <div className="w-full h-12 flex gap-4 items-center justify-between">
        <div className="file-upload">
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            className="hidden"
            id="file"
          />
          <label className="cursor-pointer" htmlFor="file">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-light"
            >
              <path
                fillRule="evenodd"
                d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <input
          className="bg-gray-dark h-10 w-[90%] text-light outline-none placeholder:text-light"
          placeholder="Your Message"
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <button className="send-message" onClick={sendHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 fill-light"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SendMsg;
