import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login (this could be passed to the Signup component)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn && <Signup onLogin={handleLogin} />}
      {isLoggedIn && <Navbar />}
    </div>
  );
}

export default App;
