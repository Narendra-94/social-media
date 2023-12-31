import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MediaContext } from "../../context/MediaContext";
import { Posts } from "../Posts";
import "./profile.css";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { UnfollowBtn } from "./UnfollowBtn";
import { FollowBtn } from "./FollowBtn";
import { EditProfile } from "./EditProfile";
import { Modal } from "../Modal";
import { Follower } from "./Follower";
import { Following } from "./Following";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsGlobe2 } from "react-icons/bs";

export const Profile = () => {
  const { state } = useContext(MediaContext);
  const [showModal, setShowModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  const [showFollowersModal, setShowFollowersModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

  const navigate = useNavigate();

  const socialUser = JSON.parse(localStorage.getItem("user"));

  const userData = state.users?.find(
    (dbUser) => dbUser.username === socialUser.username
  );

  const postDetails = state.posts?.filter(
    (post) => post.username === userData.username
  );
  const handleLogout = () => {
    toast.success(`Logged Out `, {
      autoClose: 1000,
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastClassName: "custom-toast",
    });
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="profile">
      <div className="profile-header-container">
        <span className="home-route" onClick={() => navigate("/")}>
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
                  <p className="bio" style={{ marginBottom: "10px" }}>
                    {userData.bio}
                  </p>
                  <a className="work" href={userData.website}>
                    <BsGlobe2
                      style={{
                        fontSize: "2rem",
                        marginRight: "5px",
                        color: "#1dfbf2",
                      }}
                    />
                    {userData.website}
                  </a>
                </div>

                <div className="follow-content ">
                  <span
                    onClick={openFollowingModal}
                    className="following-length"
                  >
                    <b>{socialUser.following.length} </b>
                    <span>Following</span>
                  </span>
                  {showFollowingModal && (
                    <Modal>
                      <Following
                        socialUser={socialUser}
                        onClose={closeFollowingModal}
                      />
                    </Modal>
                  )}
                  <span
                    onClick={openFollowersModal}
                    className="follower-length"
                  >
                    <b>{socialUser.followers.length} </b>
                    <span>Followers</span>
                  </span>
                  {showFollowersModal && (
                    <Modal>
                      <Follower
                        socialUser={socialUser}
                        onClose={closeFollowersModal}
                      />
                    </Modal>
                  )}
                </div>
              </div>

              {socialUser.username === userData.username ? (
                <div className="profile-button edit-button">
                  <button className="edit-profile-button" onClick={openModal}>
                    Edit Profile
                  </button>
                  {showModal && (
                    <Modal>
                      <EditProfile userData={userData} onClose={closeModal} />
                    </Modal>
                  )}

                  <div onClick={handleLogout}>
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
            <Posts post={post} user={userData} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
