import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FollowBtn = ({ userData }) => {
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);

  const handleUserFollow = async () => {
    toast.success(
      `You started following ${userData.firstName} ${userData.lastName}`,
      {
        autoClose: 1000,
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastClassName: "custom-toast",
      }
    );

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
    <div className=" ">
      <button onClick={handleUserFollow} className="follow-btn">
        Follow
      </button>
    </div>
  );
};
