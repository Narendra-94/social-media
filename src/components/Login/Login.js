import React, { useContext, useState } from "react";
import { Logo } from "../Logo";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "../SignUp/signup.css";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { setToken, profile, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginGuest = async () => {
    const credentials = {
      username: "gabbarsingh",
      password: "KitneAdmiThe@3",
    };
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    const data = await response?.json();
    console.log(data, "data");
    if (data.encodedToken) {
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate("/");
      setToken(data.encodedToken);
      setProfile({
        ...profile,
        firstName: data.foundUser.firstName,
        lastName: data.foundUser.lastName,
        username: data.foundUser.username,
        avatar: data.foundUser.avatar,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoginGuest();
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <Logo />
        <p className="tag-line">
          A Social Media App for <b>Dramebaaz</b>!
        </p>
        <h1>Login</h1>
        <form action="" className="signup-input" onSubmit={handleSubmit}>
          <div className="signup-input-username">
            <label htmlFor="">UserName</label>
            <input
              type="text"
              placeholder="gabbarsingh"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>

          <div className="signup-input-password">
            <label htmlFor="">Password</label>
            <div className="password-container">
              <input
                type="text"
                className="password"
                placeholder="KitneAadmiThe@3"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <AiFillEye className="eye" />
            </div>
          </div>
          <div className="login-button-container">
            <button className="login-btn">Login</button>
            <button className="guest-btn" type="submit">
              Guest Mode
            </button>
          </div>

          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
