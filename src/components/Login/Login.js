import React from "react";
import { Logo } from "../Logo";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../SignUp/signup.css";
import "./login.css";

export const Login = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <Logo />
        <p className="tag-line">
          A Social Media App for <b>Dramebaaz</b>!
        </p>
        <h1>Login</h1>
        <form action="" className="signup-input">
          <div className="signup-input-username">
            <label htmlFor="">UserName</label>
            <input type="text" placeholder="gabbarsingh" />
          </div>

          <div className="signup-input-password">
            <label htmlFor="">Password</label>
            <div className="password-container">
              <input
                type="text"
                className="password"
                placeholder="KitneAadmiThe@3"
              />
              <AiFillEye className="eye" />
            </div>
          </div>
          <div className="login-button-container">
            <button className="login-btn">Login</button>
            <button className="guest-btn">Guest Mode</button>
          </div>

          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
