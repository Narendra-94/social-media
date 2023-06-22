import React from "react";
import "./Modal.css";

export const Modal = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
