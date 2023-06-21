import React, { useContext } from "react";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const { profile } = useContext(AuthContext);
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
            <Link>Logout</Link>
          </div>
        </div>

        <div className="navbar-profile">
          <Link className="profile-link">
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
