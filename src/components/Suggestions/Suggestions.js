import React, { useContext } from "react";

import { Search } from "./Search/Search";
import { MediaContext } from "../../context/MediaContext";
import { useNavigate } from "react-router-dom";
import { FollowBtn } from "../Profile/FollowBtn";
import "../Suggestions/suggestions.css";

export const Suggestions = () => {
  const { state } = useContext(MediaContext);

  const socialUser = JSON.parse(localStorage.getItem("user"));

  const userData = state.users?.find(
    (dbUser) => dbUser.username === socialUser.username
  );

  const followingData = socialUser.following.map((el) => el.username);
  const filterSuggestions = state.users?.filter(
    (el) =>
      el.username !== socialUser.username &&
      !followingData.includes(el.username)
  );

  const navigate = useNavigate();

  return (
    <aside className="suggestions">
      <Search />
      <div className="suggestions-card">
        <h3>Suggested Users</h3>
        {filterSuggestions.map((user) => (
          <div className="suggestions-container">
            <div
              className="avatar-image"
              onClick={() => navigate(`/profile/${user.username}`)}
            >
              <img src={user.avatar} alt="" className="avatar" />
            </div>
            <div
              className="suggestions-data"
              onClick={() => navigate(`/profile/${user.username}`)}
            >
              <div className="user-container">
                <p className="name">
                  {user.firstName} {user.lastName}
                </p>
                <p className="username">@{user.username}</p>
              </div>
            </div>
            <FollowBtn userData={user} />
          </div>
        ))}
      </div>
    </aside>
  );
};
