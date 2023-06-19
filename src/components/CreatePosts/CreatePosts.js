import React, { useContext } from "react";
import "./createpost.css";
import { AuthContext } from "../../context/AuthContext";
import { BsImage } from "react-icons/bs";

export const CreatePosts = () => {
  const { profile } = useContext(AuthContext);

  return (
    <div className="create-post">
      <div className="create-post-container">
        <div className="avatar-image avatar-create-post">
          <img src={profile.avatar} alt="User Avatar" className="avatar" />
        </div>
        <div>
          <textarea
            name=""
            id="create-post-input"
            className="create-post-text-input"
            placeholder="Lights, camera, movie magic!"
          />
          <div className="create-post-option">
            <label htmlFor="">
              <input type="file" accept="image/*" className="hidden" />
              <div className="gallery">
                <BsImage />
              </div>
            </label>

            <button className="create-post-btn">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
