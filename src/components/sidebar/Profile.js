import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

// contexts
import { authContext } from "../../contexts/AuthContext";
import { chatContext } from "../../contexts/ChatContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(authContext);
  const { data } = useContext(chatContext);

  const navigate = useNavigate()

  const logoutHandler = () => {
    signOut(auth);
    data.chatId = "null";
    data.user = {};

    navigate("/login")
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center text-lg text-light">
        <img src={user.photoURL} className="w-12 h-12 object-cover rounded-xl" alt="" />
        <h2>{user.displayName}</h2>
      </div>
      <button className="logout" onClick={logoutHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 stroke-light"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </button>
    </div>
  );
};

export default Profile;
