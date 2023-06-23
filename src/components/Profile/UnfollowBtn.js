import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";

export const UnfollowBtn = ({ userData }) => {
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);

  const handleUnfollowUser = async (userData) => {
    const response = await fetch(`/api/users/unfollow/${userData._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: {},
    });
    const data = await response?.json();

    console.log(data);
    dispatch({
      type: "REMOVE_FOLLOWER",
      payload: { unfollowedUser: data.followUser },
    });
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  return (
    <div>
      <button
        onClick={() => handleUnfollowUser(userData)}
        className="unfollow-btn"
      >
        Unfollow
      </button>
    </div>
  );
};
