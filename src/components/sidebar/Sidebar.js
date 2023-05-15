import React, { useContext, useEffect, useRef, useState } from "react";
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
  const [openSidebar, setOpenSidebar] = useState(false);

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

  const sidebarHandler = () => {
    let sidebar;

    if(!openSidebar) {
      sidebar = true;
    } else {
      sidebar = false;
    }

    setOpenSidebar(sidebar)
  }

  const sidebarCloseOnClick = (e) => {
    setOpenSidebar(false)
  }

  return (
    <div className={`sidebar p-2 lg:p-0 absolute lg:relative bg-gray-dark z-20 lg:w-[30%] h-full w-[70%] transition-all duration-200 ${!openSidebar ? "-left-[70%]" : "left-0"} lg:left-0`}>
      <div className="flex flex-col relative h-full gap-3 bg-slate-800">
        <Profile />
        <Search />
        <div onClick={sidebarCloseOnClick} className="all-friends flex flex-col gap-2 pr-2 overflow-y-scroll">
          {/* convert to object and sort by last message */}
          {Object.entries(friends)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((friend) => (
              <Friends usersData={friend} key={friend[0]} />
            ))}
        </div>
        <button onClick={sidebarHandler} className="open-sidebar lg:hidden absolute top-2/4 -translate-y-2/4 -right-9 w-9 h-9 flex items-center justify-center bg-gray-light rounded-xl">
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
