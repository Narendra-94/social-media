import React, { useContext } from "react";
import { MediaContext } from "../../context/MediaContext";
import { Posts } from "../Posts";
import { PageHeader } from "../PageHeader/PageHeader";

export const Explore = () => {
  const { state } = useContext(MediaContext);
  return (
    <div className="explore">
      <PageHeader headerText="Explore" />
      {state.posts?.map((post) => {
        const user = state?.users?.find(
          (user) => user.username === post.username
        );

        return <Posts user={user} post={post} />;
      })}
    </div>
  );
};
