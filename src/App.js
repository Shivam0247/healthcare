import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* {!isLoggedIn && <Signup onLogin={handleLogin} />} */}
      {/* {isLoggedIn && <Navbar />} */}
      <Login />
    </div>
  );
}

export default App;
