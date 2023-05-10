<<<<<<< HEAD
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
=======
import React from "react"
import {  Routes, Route } from "react-router-dom"
>>>>>>> 097b892fd65ee1cdf1dcf07cd23afe1cf3adec48

// css styles
import "./index.css";
import "./css/style.css";

// components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// contexts

import { authContext } from "./contexts/AuthContext";

const App = () => {
  const { user } = useContext(authContext);

  const NavigateLogin = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <div className="messenger h-screen bg-[#131313] flex justify-center items-center">
      <Routes path="/">
        <Route
          index
          element={
            <NavigateLogin>
              <Home />
            </NavigateLogin>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
