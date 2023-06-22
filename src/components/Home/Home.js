import React, { useContext, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { PageHeader } from "../PageHeader/PageHeader";
import { MediaContext } from "../../context/MediaContext";
import "./home.css";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { BiComment } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { FilterPosts } from "../FilterPosts/FilterPosts";
import { CreatePosts } from "../CreatePosts/CreatePosts";
import { Likes } from "./Likes";
import { getSortedPosts } from "../../utils";
import { BookmarkBtn } from "./BookmarkBtn";
import { Posts } from "../Posts";
import { AuthContext } from "../../context/AuthContext";

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
