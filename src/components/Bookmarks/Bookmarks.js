import React, { useContext } from "react";

import { MediaContext } from "../../context/MediaContext";
import "../Home/home.css";
import { AuthContext } from "../../context/AuthContext";
import { Posts } from "../Posts";
import { PageHeader } from "../PageHeader/PageHeader";

export const Bookmarks = () => {
  const { state } = useContext(MediaContext);
  const { profile } = useContext(AuthContext);

  const loggedInUser = state.users?.find(({ _id }) => _id === profile._id);
  const newBookmark = state.posts?.filter(({ _id }) =>
    loggedInUser?.bookmarks.includes(_id)
  );

  return (
    <div className="bookmark">
      <PageHeader headerText="Bookmarks" />
      {loggedInUser?.bookmarks.length === 0 ? (
        <p style={{ fontSize: "2rem", textAlign: "center", color: "white" }}>
          No Bookmarks
        </p>
      ) : (
        newBookmark?.map((post) => {
          const user = state?.users?.find(
            (user) => user.username === post.username
          );
          return <Posts post={post} user={user} />;
        })
      )}
    </div>
  );
};
