// src/App.js

import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Profile />
    </div>
  );
}

export default App;
