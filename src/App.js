import React from "react"
import {  Routes, Route } from  "react-router-dom"

// css styles
import "./index.css"
import "./css/style.css"

// components
import Home from "./pages/Home"

const App = () => {
  return (
    <div className="messenger h-screen bg-[#131313] flex justify-center items-center">
      <Home />
    </div>
  );
}

export default App;
