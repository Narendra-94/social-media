import React, { useContext } from "react";

import dayjs from "dayjs";
import "dayjs/locale/en";
import { BiComment } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { Likes } from "./Home/Likes";
import { BookmarkBtn } from "./Home/BookmarkBtn";
import { Menu } from "./Menu/Menu";
import { MediaContext } from "../context/MediaContext";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const Posts = ({ post, user }) => {
  const { state } = useContext(MediaContext);
  const { profile } = useContext(AuthContext);
  const editHandlerPost = state.posts.filter(
    (post) => post.username === profile.username
  );

  const navigate = useNavigate();

  const location = useLocation();

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
              {editHandlerPost.map((content) =>
                content._id === post._id ? (
                  <Menu post={post} user={user} />
                ) : null
              )}
            </div>
            <div
              className="user-content"
              onClick={() => navigate(`/singlePost/${post._id}`)}
            >
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
                <BookmarkBtn post={post} />
              </div>

              <BsShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
