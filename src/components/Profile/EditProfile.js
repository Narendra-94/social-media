import React, { useContext, useState } from "react";
import "./EditProfile.css";
import { BsFillCameraFill } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";

export const EditProfile = ({ userData, onClose }) => {
  const [profile, setProfile] = useState({ ...userData });

  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfile((prevProfile) => ({
        ...prevProfile,
        avatar: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleUser = async () => {
    const response = await fetch(`/api/users/edit`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ userData: profile }),
    });
    const data = await response?.json();
    dispatch({ type: "EDIT_USER", payload: data.user });
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-modal">
      <form action="" className="profile-edit-form" onSubmit={handleSubmit}>
        <div className="profile-edit-header">
          <div className="profile-edit-container">
            <button className="profile-edit-close-button" onClick={onClose}>
              X
            </button>
            <span className="profile-edit-name">Edit Profile</span>
          </div>
          <button className="edit-profile-save-button" onClick={handleUser}>
            Save
          </button>
        </div>
        <label htmlFor="" className="profile-edit-label">
          <input type="text" className="hidden" />
        </label>
        <span className="profile-edit-photo-container">
          <img src={profile.avatar} alt="" className="profile-edit-photo" />
          <label htmlFor="fileInput">
            <BsFillCameraFill className="profile-add-photo" />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageUpload}
          />
        </span>
        <div className="profile-name-container">
          <label htmlFor="" className="profile-name-label">
            <div className="profile-edit-label-name"> Name</div>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              className="profile-name-label-input"
              onChange={(event) => handleInputChange(event, "firstName")}
            />
          </label>
        </div>
        <div className="profile-name-container">
          <label htmlFor="" className="profile-name-label">
            <div className="profile-edit-label-name"> Lastname</div>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              className="profile-name-label-input"
              onChange={(event) => handleInputChange(event, "lastName")}
            />
          </label>
        </div>
        <div className="profile-name-container">
          <label htmlFor="" className="profile-name-label">
            <div className="profile-edit-label-name">Bio</div>
            <input
              type="text"
              name="bio"
              value={profile.bio}
              className="profile-name-label-input"
              onChange={(event) => handleInputChange(event, "bio")}
            />
          </label>
        </div>
        <div className="profile-name-container">
          <label htmlFor="" className="profile-name-label">
            <div className="profile-edit-label-name"> Website</div>
            <input
              type="text"
              name="website"
              value={profile.website}
              className="profile-name-label-input"
              onChange={(event) => handleInputChange(event, "website")}
            />
          </label>
        </div>
      </form>
    </div>
  );
};
