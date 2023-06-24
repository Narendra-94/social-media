import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")) || "";

  const [token, setToken] = useState(encodedToken || "");

  const [profile, setProfile] = useState(user);
  const [signUpData, setSignUpData] = useState(user);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        profile,
        setProfile,
        signUpData,
        setSignUpData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
