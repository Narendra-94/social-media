import React from "react";

export const Following = ({ socialUser, onClose }) => {
  return (
    <div className="following-modal">
      <div className="following-header">
        <h2>Following</h2>
        <button onClick={onClose} className="following-close-btn">
          X
        </button>
      </div>

      {socialUser.following.map((follower) => (
        <div key={follower.id} className="following-container">
          <div className="following-container-information">
            <span>
              <img src={follower.avatar} alt="" className="following-image" />
            </span>
          </div>
          <div className="following-username-information">
            <span className="following-name">
              {follower.firstName} {follower.lastName}
            </span>
            <span className="following-username">@{follower.username}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
