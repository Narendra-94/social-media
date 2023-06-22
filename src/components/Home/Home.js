import React, { useContext, useState } from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import { MediaContext } from "../../context/MediaContext";
import "./home.css";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { FilterPosts } from "../FilterPosts/FilterPosts";
import { CreatePosts } from "../CreatePosts/CreatePosts";
import { getSortedPosts } from "../../utils";
import { Posts } from "../Posts";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { state } = useContext(MediaContext);
  const { profile } = useContext(AuthContext);
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const postsFollowing = state.posts?.filter((item) =>
    profile?.following.some(
      (followingUser) =>
        followingUser.username === item.username ||
        profile.username === item.username
    )
  );

  const sortedPosts = getSortedPosts(postsFollowing, selectedFilter);

  return (
    <div className="home">
      <PageHeader headerText="Home" />
      <CreatePosts />
      <FilterPosts
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {sortedPosts?.map((post) => {
        const user = state?.users?.find(
          (user) => user.username === post.username
        );

        return <Posts user={user} post={post} />;
      })}
    </div>
  );
};
