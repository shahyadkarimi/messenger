import React, { useContext, useEffect, useState } from "react";

// components
import Search from "./Search";
import Friends from "./Friends";
import Profile from "./Profile";

// contexts
import { authContext } from "../../contexts/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Sidebar = () => {
  const { user } = useContext(authContext);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (friend) => {
        setFriends(friend.data());
      });

      return () => {
        unsub();
      };
    };

    user.uid && fetchFriends();
  }, [user.uid]);

  return (
    <div className="sidebar w-[35%] h-full">
      <div className="flex flex-col h-full gap-3 bg-slate-800">
        <Profile />
        <Search />
        <div className="all-friends flex flex-col gap-2 pr-2 overflow-y-scroll">
          {Object.entries(friends)?.map((friend) => (
            <Friends usersData={friend} key={friend[0]}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
