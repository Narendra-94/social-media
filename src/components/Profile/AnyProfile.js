import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MediaContext } from "../../context/MediaContext";
import { Posts } from "../Posts";
import "./profile.css";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { UnfollowBtn } from "./UnfollowBtn";
import { FollowBtn } from "./FollowBtn";
import { Modal } from "../Modal";
import { Following } from "./Following";
import { Follower } from "./Follower";

export const AnyProfile = () => {
  const { state } = useContext(MediaContext);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const { username } = useParams();

  const openFollowingModal = () => {
    setShowFollowingModal(true);
  };

  const closeFollowingModal = () => {
    setShowFollowingModal(false);
  };

  const openFollowersModal = () => {
    setShowFollowersModal(true);
  };

  const closeFollowersModal = () => {
    setShowFollowersModal(false);
  };

  const naviagte = useNavigate();

  const socialUser = JSON.parse(localStorage.getItem("user"));

  const userData = state.users?.find((dbUser) => dbUser.username === username);

  console.log(userData, "userData");

  const postDetails = state.posts?.filter(
    (post) => post.username === userData.username
  );
  console.log(state.users, "users in profile");
  console.log(userData, " in profile");

  return (
    <div className="profile">
      <div className="profile-header-container">
        <span className="home-route" onClick={() => naviagte("/")}>
          <AiOutlineArrowLeft />
        </span>
        <div>
          <span className="single-post-header">
            {userData.firstName} {userData.lastName}
          </span>
          <p style={{ fontSize: "1.3rem", color: "##e2e2e292" }}>
            {postDetails.length} posts
          </p>
        </div>
      </div>
      <div>
        <div className="profile-information">
          <div className="profile-information-container">
            <div className="profile-avatar">
              <img src={userData.avatar} alt="" />
            </div>

            <div className="profile-details">
              <div className="profile-details-info">
                <div className="profile-name-details">
                  <p className="profile-name">
                    {userData.firstName} {userData.lastName}
                  </p>
                  <p className="profile-username">@{userData.username}</p>
                </div>

                <div className="profile-bio">
                  <p className="bio">{userData.bio}</p>
                  <a className="work" href={userData.website}>
                    {userData.website}
                  </a>
                </div>

                <div className="follow-content ">
                  <span
                    onClick={openFollowingModal}
                    className="following-length"
                  >
                    <b>{userData.following.length} </b>
                    <span>Following</span>
                  </span>
                  {showFollowingModal && (
                    <Modal>
                      <Following
                        socialUser={userData}
                        onClose={closeFollowingModal}
                      />
                    </Modal>
                  )}
                  <span
                    onClick={openFollowersModal}
                    className="follower-length"
                  >
                    <b>{userData.followers.length} </b>
                    <span>Followers</span>
                  </span>
                  {showFollowersModal && (
                    <Modal>
                      <Follower
                        socialUser={userData}
                        onClose={closeFollowersModal}
                      />
                    </Modal>
                  )}
                </div>
              </div>

              {socialUser.username === userData.username ? (
                <div className="edit-button profile-button">
                  <button>Edit Profile</button>
                  <div>
                    <FiLogOut />
                  </div>
                </div>
              ) : socialUser.following?.find(
                  (follower) => follower.username === userData.username
                ) ? (
                <UnfollowBtn userData={userData} />
              ) : (
                <FollowBtn userData={userData} />
              )}
            </div>
          </div>

          {postDetails.map((post) => (
            <Posts post={post} user={userData} />
          ))}
        </div>
      </div>
    </div>
  );
};
