import React, { useContext } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { PageHeader } from "../PageHeader/PageHeader";
import { MediaContext } from "../../context/MediaContext";
import "./home.css";
import dayjs from "dayjs";
import "dayjs/locale/en";

export const Home = () => {
  const { state, dispatch } = useContext(MediaContext);
  console.log(state);
  return (
    <div className="home">
      <PageHeader headerText="Home" />
      {state.posts.posts.map((post) => {
        const user = state?.users?.users.find(
          (user) => user.username === post.username
        );

        return (
          <div key={post.id} className="post">
            <div className="post-container">
              <div className="user-information">
                <div className="avatar-image">
                  <img
                    src={user?.avatar}
                    alt="User Avatar"
                    className="avatar"
                  />
                </div>
                <div className="user-content">
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
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
