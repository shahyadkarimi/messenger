import React, { useState, useContext } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

// import context
import { authContext } from "../../contexts/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [friend, setFriend] = useState(null);
  const [err, setErr] = useState(false);

  const { user } = useContext(authContext);

  const searchHandler = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((u) => {
        setFriend(u.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const enterHandler = (e) => {
    e.code === "Enter" && searchHandler();
  };

  const selectHandler = async () => {
    // check in database chats exist or not, if not create chats
    const combindId =
      user.uid > friend.uid ? user.uid + friend.uid : friend.uid + user.uid;

    try {
      // check chats exist or not
      const res = await getDoc(doc(db, "chats", combindId));

      if (!res.exists()) {
        // if not create chat in chats collection
        await setDoc(doc(db, "chats", combindId), { messages: [] });

        // create user chat
        await updateDoc(doc(db, "userChats", user.uid), {
          [combindId + ".userInfo"]: {
            uid: friend.uid,
            displayName: friend.displayName,
            photoURL: friend.photoURL,
          },
          [combindId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", friend.uid), {
          [combindId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combindId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      setErr(true);
    }

    setUsername("");
    setFriend(null);
  };

  return (
    <div className="search w-full">
      <div className="relative">
        <input
          className="w-full py-3 pl-10 pr-3 text-light bg-gray-light rounded-xl outline-none border-none placeholder:text-light"
          placeholder="Search"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={enterHandler}
          value={username}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 stroke-light absolute top-2/4 -translate-y-2/4 left-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      {friend && (
        <div
          onClick={selectHandler}
          className="friends w-full relative flex items-center gap-3 mt-1 hover:bg-gray-light cursor-pointer p-3 rounded-2xl transition-all duration-200"
        >
          <img src={friend.photoURL} className="w-12 rounded-md" alt="" />
          <div className="profile-info">
            <h2 className="profile-name text-light">{friend.displayName}</h2>
            <p className="last-msg text-[12.5px] text-[#9c9c9c] mt-1">
              click here to chat with <span>{friend.displayName}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
