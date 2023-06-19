import React from "react";
import "./suggestions.css";

export const Suggestions = () => {
  return (
    <aside className="suggestions">
      <input
        type="text"
        placeholder="Search users..."
        className="search-users-input"
      />
    </aside>
  );
};
