import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")) || "";

  const [token, setToken] = useState(encodedToken || "");

  const [profile, setProfile] = useState(
    user
    // firstName: user.firstName || "",
    // lastName: user.lastName || "",
    // username: user.username || "",
    // avatar: user.avatar || "",
  );
  console.log(profile);
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        profile,
        setProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
