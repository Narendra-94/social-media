import React, { useContext, useState } from "react";
import "./signup.css";
import { Logo } from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AvatarGenerator } from "random-avatar-generator";

export const SignUp = () => {
  const { setToken, profile, setProfile, signUpData, setSignUpData } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleInput = (e, fieldName) => {
    const { value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const generator = new AvatarGenerator();
  const handleSignUp = async () => {
    const validationErrors = {};

    if (!signUpData.firstName) {
      validationErrors.firstName = "First name is required";
    }

    if (!signUpData.lastName) {
      validationErrors.lastName = "Last name is required";
    }

    if (!signUpData.username) {
      validationErrors.email = "Email is required";
    }

    if (!signUpData.password) {
      validationErrors.password = "Password is required";
    }

    if (!signUpData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm password is required";
    } else if (signUpData.password !== signUpData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords don't match";
    }

    if (signUpData.password === signUpData.confirmPassword) {
      try {
        const avatar = generator.generateRandomAvatar(signUpData.firstName);
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify({
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            username: signUpData.username,
            password: signUpData.password,
            avatar: avatar,
          }),
        });
        const data = await response.json();
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.createdUser));
        setToken(data.encodedToken);
        navigate("/");
        setProfile(data.createdUser);

        toast(`🎭 Welcome ${signUpData.firstName} ${signUpData.lastName}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (err) {
        alert(err);
      }
    } else {
      alert("Passwords don't match");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <Logo />
        <p className="tag-line">
          A Social Media App for <b>Dramebaaz</b>!
        </p>
        <h1>SignUp</h1>
        <form action="" className="signup-input" onSubmit={handleSubmit}>
          <div className="signup-input-name">
            <label htmlFor="">Firstname</label>
            <input
              type="text"
              placeholder="Gabbar "
              onChange={(e) => handleInput(e, "firstName")}
              required
            />
          </div>
          <div className="signup-input-name">
            <label htmlFor="">Lastname</label>
            <input
              type="text"
              placeholder=" Singh"
              onChange={(e) => handleInput(e, "lastName")}
              required
            />
          </div>
          <div className="signup-input-username">
            <label htmlFor="">UserName</label>
            <input
              type="text"
              placeholder="gabbarsingh"
              onChange={(e) => handleInput(e, "username")}
              required
            />
          </div>
          <div className="signup-input-password">
            <label htmlFor="">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "password" : "text"}
                className="password"
                placeholder="KitneAadmiThe@3"
                onChange={(e) => handleInput(e, "password")}
                required
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
          <div className="signup-input-confirm-password">
            <label htmlFor="">Confirm Password</label>
            <div className="password-container">
              <input
                type={showConfirmPassword ? "password" : "text"}
                className="confirm-password"
                placeholder="KitneAadmiThe@3"
                onChange={(e) => handleInput(e, "confirmPassword")}
                required
              />
              {showConfirmPassword ? (
                <AiFillEyeInvisible
                  className="eye"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <AiFillEye
                  className="eye"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
          </div>

          <button className="signup-btn" onClick={handleSignUp}>
            Create New Account
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
