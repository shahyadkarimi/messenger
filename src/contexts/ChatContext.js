import React, {
  createContext,
  useContext,
  useReducer,
} from "react";
import { authContext } from "./AuthContext";

export const chatContext = createContext();

const ChatContext = ({ children }) => {
  const { user } = useContext(authContext);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            user.uid > action.payload.uid
              ? user.uid + action.payload.uid
              : action.payload.uid + user.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <chatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </chatContext.Provider>
  );
};

export default ChatContext;
