import React, { useContext } from "react";
import { BiHeart } from "react-icons/bi";
import "./home.css";
import { MediaContext } from "../../context/MediaContext";
import { AuthContext } from "../../context/AuthContext";

export const Likes = ({ post }) => {
  const { state, dispatch } = useContext(MediaContext);
  const { token, profile } = useContext(AuthContext);
  console.log(post, "outside");

  // const isLike = "002" === profile._id;
  const isLike =
    post.likes.likedBy.filter((users) => users._id === profile._id).length !==
    0;
  // const isLike = post.likes.likedBy.map((users) => console.log(users));
  console.log(isLike, "isLike");
  console.log("abcd");

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
    console.log(isLike, "isLike");
    console.log(profile, "profile");
    console.log(post, "postinside");
    if (isLike) {
      handlePostDislike(postUser);
    } else handlePostlike(postUser);
  };

  return (
    <>
      <button className={"like-btn"} onClick={() => likedPostByUser(post)}>
        {/* <BiHeart /> */}
        {isLike ? "Unlike" : "Like"}
      </button>
    </>
  );
};
