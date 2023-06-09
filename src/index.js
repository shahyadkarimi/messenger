import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// context
import AuthContext from "./contexts/AuthContext";
import ChatContext from "./contexts/ChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContext>
        <ChatContext>
          <App />
        </ChatContext>
      </AuthContext>
    </React.StrictMode>
  </BrowserRouter>
);
