import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

// components
import Search from "./Search";
import Friends from "./Friends";
import Profile from "./Profile";

// contexts
import { authContext } from "../../contexts/AuthContext";

const Sidebar = () => {
  const [friends, setFriends] = useState([]);

  const { user } = useContext(authContext);

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
    <div className="sidebar p-4 lg:p-0 bg-gray-dark z-20 lg:w-[30%] h-full w-full transition-all duration-200">
      <div className="flex flex-col relative h-full gap-3 bg-slate-800">
        <Profile />
        <Search />
        <div className="all-friends flex flex-col gap-2 pr-2 overflow-y-scroll">
          {/* convert to object and sort by last message */}
          {Object.entries(friends)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((friend) => (
              <Friends usersData={friend} key={friend[0]} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
