import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MediaContext } from "../../context/MediaContext";
import { Posts } from "../Posts";
import { PageHeader } from "../PageHeader/PageHeader";

export const SinglePost = () => {
  const { postId } = useParams();
  const { state } = useContext(MediaContext);

  const postDetails = state.posts?.find(
    (post) => post._id.toString() === postId
  );

  const userDetails = state?.users?.find(
    (user) => user.username === postDetails.username
  );

  console.log(userDetails, "userDetails");

  return (
    <div className="single-post">
      <PageHeader headerText="Post" />
      <Posts user={userDetails} post={postDetails} />
    </div>
  );
};
