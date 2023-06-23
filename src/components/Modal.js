import React from "react";
import "./Modal.css";

export const Modal = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
};
