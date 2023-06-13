import React from "react";
import "./signup.css";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <Logo />
        <p className="tag-line">
          A Social Media App for <b>Dramebaaz</b>!
        </p>
        <h1>SignUp</h1>
        <form action="" className="signup-input">
          <div className="signup-input-name">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="Gabbar Singh" />
          </div>
          <div className="signup-input-username">
            <label htmlFor="">UserName</label>
            <input type="text" placeholder="gabbarsingh" />
          </div>
          <div className="signup-input-email">
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder="gabbar@sholay.com" />
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
          <div className="signup-input-confirm-password">
            <label htmlFor="">Confirm Password</label>
            <div className="password-container">
              <input
                type="text"
                className="confirm-password"
                placeholder="KitneAadmiThe@3"
              />
              <AiFillEye className="eye" />
            </div>
          </div>

          <button className="signup-btn">Create New Account</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
