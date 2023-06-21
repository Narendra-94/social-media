import React from "react";
import { SlOptionsVertical } from "react-icons/sl";

import dayjs from "dayjs";
import "dayjs/locale/en";
import { BiComment } from "react-icons/bi";
import { BsShare } from "react-icons/bs";

import { Likes } from "./Home/Likes";

import { BookmarkBtn } from "./Home/BookmarkBtn";
export const Posts = ({ post, user }) => {
  return (
    <div key={post._id} className="post">
      <div className="post-container">
        <div className="user-information">
          <div className="avatar-image">
            <img src={user?.avatar} alt="User Avatar" className="avatar" />
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
                    {dayjs(post.createdAt).locale("en").format("MMM D, YYYY")}
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
              <div>
                <BookmarkBtn post={post} user={user} />
              </div>

              <BsShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
