import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserState } from "./Context/User/UserState";
import HospitalNavbar from "./components/OneHospitalView/HospitalNavnar/HospitalNavbar";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <UserState>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user/*" element={<Navbar />} />
            <Route path="/Hospital/*" element={<HospitalNavbar />} />
          </Routes>
        </Router>
      </UserState>
    </div>
  );
}

export default App;
