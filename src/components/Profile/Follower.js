import React from "react";

export const Follower = ({ socialUser, onClose }) => {
  return (
    <div className="follower-modal">
      <div className="follower-header">
        <h2>Followers</h2>
        <button className="follower-close-btn" onClick={onClose}>
          X
        </button>
      </div>

      {socialUser.followers.map((follower) => (
        <div key={follower.id} className="follower-container">
          <div className="follower-container-information">
            <span>
              <img src={follower.avatar} alt="" className="follower-image" />
            </span>
          </div>
          <div className="follower-username-information">
            <span className="follower-name">
              {follower.firstName} {follower.lastName}
            </span>
            <span className="follower-username">@{follower.username}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
