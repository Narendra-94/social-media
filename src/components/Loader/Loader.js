import React from "react";
import loader from "../../images/cinema.gif";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loader} alt="" className="loader" />
    </div>
  );
};
