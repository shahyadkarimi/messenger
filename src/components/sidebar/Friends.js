import React, { useContext } from "react";
import { timeConverter, limitMsgLength } from "../../helper/functions";

// context
import { chatContext } from "../../contexts/ChatContext";

const Friends = ({ usersData }) => {
  const { dispatch } = useContext(chatContext);
  return (
    <div
      onClick={() =>dispatch({ type: "CHANGE_USER", payload: usersData[1].userInfo })}
      className="friends w-full relative flex items-center gap-3 hover:bg-gray-light cursor-pointer p-3 rounded-2xl transition-all duration-200"
    >
      <img
        src={usersData[1].userInfo.photoURL}
        className="w-12 h-12 object-cover rounded-xl"
        alt=""
      />
      <div className="profile-info">
        <h2 className="profile-name text-light">
          {usersData[1].userInfo.displayName}
        </h2>
        <p className="last-msg text-[12.5px] text-[#9c9c9c] mt-1">
          {limitMsgLength(usersData[1].lastmessage ? usersData[1].lastmessage.text : `Say hi to ${usersData[1].userInfo.displayName}`)}
        </p>
      </div>
      <span className="msg-time text-[12px] text-[#9c9c9c] absolute top-4 right-3">
        {timeConverter(usersData[1].date?.seconds)}
      </span>
    </div>
  );
};

export default Friends;
