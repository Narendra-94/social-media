import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";

export const SaveBtn = ({ post, editContent, onClose }) => {
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);

  const handleEditPost = async (editContent) => {
    console.log(editContent, "editContent");
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
