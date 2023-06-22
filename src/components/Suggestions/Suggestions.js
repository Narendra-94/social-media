import React, { useContext } from "react";
import "./suggestions.css";
import "../Home/home.css";
import { Search } from "./Search/Search";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";

export const Suggestions = () => {
  const { profile } = useContext(AuthContext);
  const { state } = useContext(MediaContext);

  const userData = state.users?.find(
    (dbUser) => dbUser.username === profile.username
  );

  const filteredUsers = state.users
    ?.filter((dbUser) => dbUser.username !== userData?.username)
    .filter(
      (eachUser) =>
        !userData?.following.find((item) => item.username === eachUser.username)
    );

  return (
    <aside className="suggestions">
      <Search />
      <div className="suggestions-card">
        <h3>SuggestedUsers</h3>
        {filteredUsers.map((user) => (
          <div className="suggestions-container">
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
