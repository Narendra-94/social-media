import React, { useContext, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import "./Menu.css";
import { Edit } from "./Edit";
import { Modal } from "../Modal";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";

export const Menu = ({ post, user }) => {
  const { token } = useContext(AuthContext);
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useContext(MediaContext);

  const openModal = () => {
    setShowModal(true);
    setShowMenuOptions(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDeleteHandler = async (post) => {
    console.log(post, "delete");

    const response = await fetch(`/api/posts/${post._id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
      // body: JSON.stringify(post),
    });
    const data = await response?.json();
    dispatch({ type: "DELETE_DATA", payload: data.posts });
  };

  return (
    <div className="menu">
      <div className="menu-icon">
        <button onClick={() => setShowMenuOptions(!showMenuOptions)}>
          <SlOptionsVertical />
        </button>

        {showMenuOptions && (
          <div className="menu-options">
            <button onClick={openModal}>Edit</button>
            <button onClick={() => handleDeleteHandler(post)}>Delete</button>
          </div>
        )}
      </div>

      {showModal && (
        <Modal>
          <Edit post={post} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};
