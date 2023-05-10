import React from "react";
import { Routes, Route } from "react-router-dom";

// css styles
import "./index.css";
import "./css/style.css";

// components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// contexts
import AuthContext from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthContext>
      <div className="messenger h-screen bg-[#131313] flex justify-center items-center">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthContext>
  );
};

export default App;
