import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MediaContext } from "../../context/MediaContext";
import { Posts } from "../Posts";
import { PageHeader } from "../PageHeader/PageHeader";
import "./SinglePost.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const SinglePost = () => {
  const { postId } = useParams();
  const { state } = useContext(MediaContext);

  const postDetails = state.posts?.find(
    (post) => post._id.toString() === postId
  );

  const userDetails = state?.users?.find(
    (user) => user.username === postDetails.username
  );
  const naviagte = useNavigate();

  console.log(userDetails, "userDetails");

  return (
    <div className="single-post">
      <div className="single-post-container">
        <span className="home-route" onClick={() => naviagte("/")}>
          <AiOutlineArrowLeft />
        </span>

        <div>
          <span className="single-post-header">Post</span>
        </div>
      </div>

      <Posts user={userDetails} post={postDetails} />
    </div>
  );
};
