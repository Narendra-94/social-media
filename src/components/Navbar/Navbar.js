import React, { useContext } from "react";
import { Logo } from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const { profile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success(`Logged Out `, {
      autoClose: 1000,
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastClassName: "custom-toast",
    });
    localStorage.clear();
    navigate("/login");
  };
  return (
    <aside className="navbar">
      <div className="navbar-container">
        <div className="navbar-menu">
          <Link to="/" className="navbar-container-logo">
            <Logo />
          </Link>
          <div className="navigation-content">
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <span className="logout" onClick={handleLogout}>
              Logout
            </span>
          </div>
        </div>

        <div className="navbar-profile">
          <Link to={`/profile`} className="profile-link">
            <div className="avatar-image">
              <img src={profile.avatar} alt="User Avatar" className="avatar" />
            </div>
            <div className="post-user-name">
              <p className="user-fullname">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="user-username">@{profile.username}</p>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};
