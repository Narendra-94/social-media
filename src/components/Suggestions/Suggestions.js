import React, { useContext, useEffect } from "react";
import "./suggestions.css";
import "../Home/home.css";
import { Search } from "./Search/Search";
import { MediaContext } from "../../context/MediaContext";
import { useNavigate } from "react-router-dom";

export const Suggestions = () => {
  const { state } = useContext(MediaContext);

  const socialUser = JSON.parse(localStorage.getItem("user"));

  const userData = state.users?.find(
    (dbUser) => dbUser.username === socialUser.username
  );

  const filteredUsers = state.users
    ?.filter((dbUser) => dbUser.username !== userData?.username)
    .filter(
      (eachUser) =>
        !userData?.following.find((item) => item.username === eachUser.username)
    );
  // const socialUserFollowing = socialUser.following;
  // const suggestedUser = state.user.filter((el)=>)
  const nnn = socialUser.following.map((el) => el.username);
  const ppp = state.users?.filter(
    (el) => el.username !== socialUser.username && !nnn.includes(el.username)
  );

  console.log(filteredUsers, "userdata in suggestion");

  const navigate = useNavigate();

  return (
    <aside className="suggestions">
      <Search />
      <div className="suggestions-card">
        <h3>Suggested Users</h3>
        {ppp.map((user) => (
          <div
            className="suggestions-container"
            onClick={() => navigate(`/profile/${user.username}`)}
          >
            <div className="avatar-image">
              <img src={user.avatar} alt="" className="avatar" />
            </div>
            <div className="suggestions-data">
              <div className="user-container">
                <p className="name">
                  {user.firstName} {user.lastName}
                </p>
                <p className="username">@{user.username}</p>
              </div>

              <button className="follow-button">Follow</button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
