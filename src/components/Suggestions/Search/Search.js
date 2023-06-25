import React, { useContext, useEffect, useRef, useState } from "react";
import "./Search.css";
import { MediaContext } from "../../../context/MediaContext";
import "./Search.css";
import { Link } from "react-router-dom";

export const Search = () => {
  const [input, searchInput] = useState({
    isSearchOpen: false,
    inputValue: "",
  });
  const searchContainerRef = useRef(null);

  const { state } = useContext(MediaContext);
  const handleInput = (e) => {
    searchInput({
      inputValue: e.target.value,
      isSearchOpen: e.target.value.trim() !== "",
    });
  };

  const handleWindowClick = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      searchInput({ ...input, isSearchOpen: false, inputValue: "" });
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const closeSearchContainer = () => {
    searchInput({ ...input, isSearchOpen: false, inputValue: "" });
  };

  const filterList = state.users.filter(
    ({ username, firstName, lastName }) =>
      username.toLowerCase().includes(input.inputValue.toLowerCase()) ||
      firstName.toLowerCase().includes(input.inputValue.toLowerCase()) ||
      lastName.toLowerCase().includes(input.inputValue.toLowerCase())
  );

  return (
    <div className="input-search">
      <input
        type="search"
        placeholder="Search Dramebaaz here..."
        className="search-users-input"
        value={input.inputValue}
        onChange={handleInput}
      />

      {(input.isSearchOpen || input.inputValue) && (
        <div className="search-output-container" ref={searchContainerRef}>
          {filterList.length === 0 ? (
            <h3 className="search-output-message">No data found</h3>
          ) : (
            filterList.map(({ _id, avatar, firstName, lastName, username }) => (
              <Link
                to={`/profile/${username}`}
                key={_id}
                onClick={closeSearchContainer}
              >
                <div className="search-output-item">
                  <img
                    src={avatar}
                    alt=""
                    className="search-output-item-image"
                  />
                  <div className="search-output-item-details">
                    <div className="search-output-item-upper">
                      <h3 className="search-name">
                        {firstName} {lastName}
                      </h3>
                      <div className="search-output-price-details">
                        <h3 className="search-username">@{username}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};
