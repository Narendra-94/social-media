import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./context/AuthContext";
import { MediaProvider } from "./context/MediaContext";
import { DataProvider } from "./context/DataContext";
import { ErrorProvider } from "./context/ErrorContext";

makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <MediaProvider>
          <DataProvider>
            <ErrorProvider>
              <App />
            </ErrorProvider>
          </DataProvider>
        </MediaProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
