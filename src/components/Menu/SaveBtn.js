import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SaveBtn = ({ editContent, onClose }) => {
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);

  const handleEditPost = async (editContent) => {
    toast.success("Post Updated", {
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

    try {
      const response = await fetch(`/api/posts/edit/${editContent._id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ postData: editContent }),
      });
      const data = await response?.json();
      dispatch({ type: "EDIT_DATA", payload: data.posts });
      console.log(data, "data");
    } catch (error) {
      console.log(error, "error");
    }
    onClose();
  };

  return (
    <button className="save-btn" onClick={() => handleEditPost(editContent)}>
      Save
    </button>
  );
};
