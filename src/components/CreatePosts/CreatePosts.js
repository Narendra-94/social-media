import React, { useContext, useState } from "react";
import "./createpost.css";
import { AuthContext } from "../../context/AuthContext";
import { BsImage } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { MediaContext } from "../../context/MediaContext";
import { useNavigate } from "react-router-dom";

export const CreatePosts = () => {
  const { token, profile } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);
  const [createPost, setCreatePost] = useState({
    _id: uuid(),
    content: "",
    photos: null,
  });

  const handlePostChange = (event) => {
    setCreatePost({ ...createPost, content: event.target.value });
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCreatePost({
        ...createPost,
        photos: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handlePosts = async (createPost) => {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ postData: createPost }),
    });
    const data = await response?.json();
    console.log(data, "create");
    dispatch({ type: "CREATE_POSTS", payload: data.posts });

    // Clear the input fields
    setCreatePost({
      _id: uuid(),
      content: "",
      photos: null,
    });
  };

  const navigate = useNavigate();

  return (
    <div className="create-post">
      <div className="create-post-container">
        <div
          className="avatar-image avatar-create-post"
          onClick={() => navigate(`/profile`)}
        >
          <img src={profile.avatar} alt="User Avatar" className="avatar" />
        </div>
        <div className="post-container">
          <textarea
            name=""
            id="create-post-input"
            className="create-post-text-input"
            placeholder="Lights, camera, movie magic!"
            value={createPost.content}
            onChange={handlePostChange}
          />
          <div className="create-post-option">
            <label htmlFor="photo-upload">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="photo-upload"
                onChange={handleImageUpload}
              />
              <div className="gallery">
                <BsImage />
              </div>
            </label>

            <button
              disabled={!createPost.content.trim() && !createPost.photos}
              className="create-post-btn"
              onClick={() => handlePosts(createPost)}
              style={
                !createPost.content.trim() && !createPost.photos
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              Post
            </button>
          </div>
          {createPost.photos && (
            <div className="selected-photo">
              <img
                src={createPost.photos}
                alt=""
                className="selected-photo-preview"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
