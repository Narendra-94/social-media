import React, { useContext, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { PageHeader } from "../PageHeader/PageHeader";
import { MediaContext } from "../../context/MediaContext";
import "./home.css";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { BiBookmark, BiComment, BiHeart } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { FilterPosts } from "../FilterPosts/FilterPosts";
import { CreatePosts } from "../CreatePosts/CreatePosts";
import { Likes } from "./Likes";
import { getSortedPosts } from "../../utils";

export const Home = () => {
  const { state, dispatch } = useContext(MediaContext);
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const sortedPosts = getSortedPosts(state.posts, selectedFilter);
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

        return (
          <div key={post._id} className="post">
            <div className="post-container">
              <div className="user-information">
                <div className="avatar-image">
                  <img
                    src={user?.avatar}
                    alt="User Avatar"
                    className="avatar"
                  />
                </div>
                <div className="user-content-container">
                  <div className="user-content-header">
                    <div className="post-user-name-container">
                      <div className="post-user-name">
                        <p className="user-fullname">
                          {user?.firstName} {user?.lastName}
                        </p>
                        <p className="user-username">@{user?.username}</p>
                      </div>
                      <div className="user-createdDate">
                        <p className="dot">.</p>
                        <p>
                          {dayjs(post.createdAt)
                            .locale("en")
                            .format("MMM D, YYYY")}
                        </p>
                      </div>
                    </div>

                    <div className="menu">
                      <SlOptionsVertical />
                    </div>
                  </div>
                  <div className="user-content">
                    <div className="content">{post.content}</div>
                    <div className="content-photos">
                      <img src={post.photos} alt="" />
                    </div>
                  </div>
                  <div className="user-appreciation">
                    <div>
                      <Likes post={post} />
                    </div>

                    <BiComment />
                    <BiBookmark />
                    <BsShare />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
