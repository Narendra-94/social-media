import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UnfollowBtn = ({ userData }) => {
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);

  const handleUnfollowUser = async (userData) => {
    toast.error(`You unfollowed ${userData.firstName} ${userData.lastName}`, {
      autoClose: 1000,
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastClassName: "custom-toast",
    });
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
