import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";

export const FollowBtn = ({ userData }) => {
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);

  const handleUserFollow = async () => {
    console.log(userData, "userData in follow");
    const response = await fetch(`/api/users/follow/${userData._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: {},
    });
    const data = await response?.json();
    dispatch({
      type: "ADD_FOLLOWING",
      payload: { user: data.user },
    });
    dispatch({
      type: "ADD_FOLLOWER",
      payload: { followUser: data.followUser },
    });
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  return (
    <div className="profile-button follow-button">
      <button onClick={handleUserFollow}>Follow</button>
    </div>
  );
};
