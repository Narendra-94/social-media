import React from "react";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <aside className="navbar">
      <div className="navbar-container">
        <div className="navbar-menu">
          <Link to="/" className="navbar-container-logo">
            <Logo />
          </Link>
          <div className="navigation-content">
            <Link>Home</Link>
            <Link>Explore</Link>
            <Link>Bookmark</Link>
            <Link>Logout</Link>
          </div>
        </div>

        <div className="navbar-profile">
          <Link>Profile</Link>
        </div>
      </div>
    </aside>
  );
};
