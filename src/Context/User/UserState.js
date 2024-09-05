import React, { createContext, useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserState = ({ children }) => {
  const host = "https://healthcarebackend.vercel.app/";
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken") || null
  );
  const [user, setUser] = useState(null);

  // Function to register a new user
  const registerUser = async (email, password) => {
    try {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setAuthToken(data.authtoken);
        localStorage.setItem("authToken", data.authtoken);
        await fetchUser();
      } else {
        console.error("Registration error:", data.error);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  // Function to login a user
  const loginUser = async (email, password) => {
    try {
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        return { success: true, data }; // Ensure this structure is returned
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error("Error logging in:", error);
      return { success: false, error: error.message };
    }
  };

  // Function to fetch the logged-in user details
  const fetchUser = async () => {
    if (!authToken) return;

    try {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data);
      } else {
        console.error("Error fetching user:", data.error);
        setAuthToken(null);
        localStorage.removeItem("authToken");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // Function to logout a user
  const logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
  };

  // Fetch user details when the token changes
  useEffect(() => {
    if (authToken) {
      fetchUser();
    }
  }, [authToken]);

  return (
    <UserContext.Provider
      value={{ user, authToken, registerUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserState };
