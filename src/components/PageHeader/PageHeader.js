import React from "react";
import "./PageHeader.css";

export const PageHeader = ({ headerText }) => {
  return (
    <div className="wrapper">
      <h2 className="headerText">{headerText}</h2>
    </div>
  );
};
