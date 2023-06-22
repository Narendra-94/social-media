import React, { useContext, useState } from "react";
import "./Menu.css";
import "./Edit.css";
import "../Home/home.css";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { SaveBtn } from "./SaveBtn";

export const Edit = ({ post, onClose }) => {
  const { profile } = useContext(AuthContext);
  const [editContent, setEditContent] = useState({
    ...post,
    _id: post._id,
    content: post.content,
    photos: post.photos,
  });

  // console.log(editContent, "editContent");
  const [showPhotos, setShowPhotos] = useState(post.photos || false);

  const handleContentChange = (event) => {
    setEditContent({ ...editContent, content: event.target.textContent });
  };

  const handleImageDelete = () => {
    setEditContent((prev) => ({ ...prev, photos: null }));
    setShowPhotos(false);
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditContent((prev) => ({ ...prev, photos: e.target.result }));
        setShowPhotos(true);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-modal">
      <div className="user-information">
        <div className="avatar-image">
          <img src={profile.avatar} alt="" className="avatar" />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div
            role="textbox"
            contentEditable="true"
            suppressContentEditableWarning
            placeholder="Lights, Camera, Action"
            className="content"
            onInput={handleContentChange}
          >
            {post.content}
          </div>
          <div className="content-photos edit-image">
            {showPhotos && editContent.photos && (
              <>
                <img src={editContent.photos} alt="" />
                <button
                  className="delete-image-btn"
                  onClick={handleImageDelete}
                >
                  <AiOutlineCloseCircle />
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      <div className="edit-button-container">
        <label className="cursor-pointer text-lg gallery">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <BsImage />
        </label>
        <div className="decision-btn">
          <SaveBtn editContent={editContent} post={post} onClose={onClose} />
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
