import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Suggestions } from "./components/Suggestions/Suggestions";
import { RequiresAuth } from "./components/RequiresAuth";

function App() {
  return (
    <div className="App">
      <div className="App-main-page-content">
        <Routes>
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <RequiresAuth>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<SignUp />} />
                </Routes>
                <Suggestions />
              </RequiresAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
