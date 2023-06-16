import React from "react";
import movie from "../../images/dream_TradingCard (1).jpg";

import "./landingpage.css";
import { Link } from "react-router-dom";

const landingContent = [
  {
    label: "Follow",
    description: "their cinematic journeys ",
  },
  {
    label: "Connect",
    description: "with movie lovers worldwide",
  },
  {
    label: "Share",
    description: " your film horizons",
  },
];

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <div className="logo-content">
          <div className="logo-container">
            <h3 className="logo-text-landing">Chalchitra</h3>
            <ul>
              {landingContent.map(({ label, description }, index) => (
                <li key={index}>
                  <span className="label">{label}</span>
                  <span className="description">{description}</span>
                </li>
              ))}
            </ul>
            <div className="authentication">
              <button className="signup-btn">
                <Link to="/signup">Join Now</Link>
              </button>
              <div className="login-path">
                <Link to="/login">Already have an account?</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-page-image">
          <img src={movie} alt="landing_page_image" />
        </div>
      </div>
    </div>
  );
};
