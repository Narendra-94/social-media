import React from "react";
import "./MainContainer.css";
import { Navbar } from "../Navbar/Navbar";
import { RequiresAuth } from "../RequiresAuth";
import { Suggestions } from "../Suggestions/Suggestions";

export const MainContainer = ({ children }) => {
  return (
    <>
      <RequiresAuth>
        <Navbar />

        {children}

        <Suggestions />
      </RequiresAuth>
    </>
  );
};
