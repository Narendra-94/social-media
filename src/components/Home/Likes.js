import React, { useContext } from "react";
import { BiHeart } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import "./home.css";
import { MediaContext } from "../../context/MediaContext";
import { AuthContext } from "../../context/AuthContext";

export const Likes = ({ post }) => {
  const { dispatch } = useContext(MediaContext);
  const { token, profile } = useContext(AuthContext);

  const isLike =
    post.likes.likedBy.filter((users) => users._id === profile._id).length !==
    0;

  const handlePostlike = async (post) => {
    const response = await fetch(`/api/posts/like/${post._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify(post),
    });
    const data = await response?.json();
    dispatch({ type: "SAVE_DATA_BY_LIKE", payload: data.posts });
  };

  const handlePostDislike = async (post) => {
    const response = await fetch(`/api/posts/dislike/${post._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify(post),
    });
    const data = await response?.json();
    dispatch({ type: "SAVE_DATA_BY_DISLIKE", payload: data.posts });
  };

  const likedPostByUser = (postUser) => {
    if (isLike) {
      handlePostDislike(postUser);
    } else handlePostlike(postUser);
  };

  return (
    <div className="likes-content">
      {isLike ? (
        <BsHeartFill
          className="like-btn"
          onClick={() => likedPostByUser(post)}
        />
      ) : (
        <BiHeart onClick={() => likedPostByUser(post)} />
      )}
      <p>{post.likes.likeCount}</p>
    </div>
  );
};
