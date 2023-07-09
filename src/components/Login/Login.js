import React, { useContext, useState } from "react";
import { Logo } from "../Logo";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Link, useLocation, useNavigate } from "react-router-dom";
import "../SignUp/signup.css";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorContext } from "../../context/ErrorContext";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { errors, setErrors } = useContext(ErrorContext);
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const { setToken, setProfile } = useContext(AuthContext);
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
      setToken(data.encodedToken);
      setProfile(data.foundUser);
      navigate("/");

      toast(
        `🎭 Welcome ${data.foundUser.firstName} ${data.foundUser.lastName}`,
        {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const handleLogin = async () => {
    const validationErrors = {};

    if (!loginData.username) {
      validationErrors.email = "Email is required";
    }

    if (!loginData.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: loginData.username,
        password: loginData.password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.encodedToken) {
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate(location?.state?.from?.pathname || "/");
      setToken(data.encodedToken);
      setProfile(data.foundUser);
      toast.success("Successfully logged in ", {
        autoClose: 1000,
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Wrong Credentials", {
        autoClose: 1000,
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
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
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
          </div>
          {errors.username && (
            <span className="error-email">{errors.username}</span>
          )}

          <div className="signup-input-password">
            <label htmlFor="">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "password" : "text"}
                className="password"
                placeholder="KitneAadmiThe@3"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="eye"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiFillEye
                  className="eye"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
          {errors.password && (
            <span className="error-password">{errors.password}</span>
          )}
          <div className="login-button-container">
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
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
