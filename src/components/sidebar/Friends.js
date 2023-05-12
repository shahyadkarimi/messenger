import React, { useContext } from "react";

// context
import { chatContext } from "../../contexts/ChatContext";

const Friends = ({ usersData }) => {
  const { data, dispatch } = useContext(chatContext);
    console.log(usersData)
  return (
    <div onClick={() => dispatch({type:"CHANGE_USER", payload: usersData[1].userInfo})} className="friends w-full relative flex items-center gap-3 hover:bg-gray-light cursor-pointer p-3 rounded-2xl transition-all duration-200">
      <img
        src={usersData[1].userInfo.photoURL}
        className="w-12 rounded-md"
        alt=""
      />
      <div className="profile-info">
        <h2 className="profile-name text-light">
          {usersData[1].userInfo.displayName}
        </h2>
        <p className="last-msg text-[12.5px] text-[#9c9c9c] mt-1">
          {usersData[1].lastmessage?.text}
        </p>
      </div>
      <span className="msg-time text-[12px] text-[#9c9c9c] absolute top-4 right-3">
        4 m
      </span>
    </div>
  );
};

export default Friends;
