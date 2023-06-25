import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { Home } from "./components/Home/Home";

import { Bookmarks } from "./components/Bookmarks/Bookmarks";
import { Explore } from "./components/Explore/Explore";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { SinglePost } from "./components/SinglePost/SinglePost";
import { Profile } from "./components/Profile/Profile";
import { AnyProfile } from "./components/Profile/AnyProfile";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <div className="App-main-page-content">
        <ToastContainer toastClassName="custom-toast" />
        <Routes>
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/"
            element={
              <MainContainer>
                <Home />
              </MainContainer>
            }
          />
          <Route
            path="/explore"
            element={
              <MainContainer>
                <Explore />
              </MainContainer>
            }
          />

          <Route
            path="/bookmarks"
            element={
              <MainContainer>
                <Bookmarks />
              </MainContainer>
            }
          />
          <Route
            path="/singlePost/:postId"
            element={
              <MainContainer>
                <SinglePost />
              </MainContainer>
            }
          />
          <Route
            path="/profile"
            element={
              <MainContainer>
                <Profile />
              </MainContainer>
            }
          />
          <Route
            path="/profile/:username"
            element={
              <MainContainer>
                <AnyProfile />
              </MainContainer>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
