import React, { useState, useEffect } from "react";
import { LuSlidersHorizontal } from "react-icons/lu";
import "./filterposts.css";
import { BsFire } from "react-icons/bs";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

export const FilterPosts = ({ selectedFilter, setSelectedFilter }) => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      handleFilteredClick("latest");
      setInitialRender(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialRender]);

  const handleFilteredClick = (filter) => {
    setSelectedFilter(filter);
    setShowFilterOptions(false);
  };

  return (
    <div className="filters">
      {selectedFilter === "trending" && <h2>Trending Posts</h2>}
      {selectedFilter === "latest" && <h2>Latest Posts</h2>}
      {selectedFilter === "oldest" && <h2>Oldest Posts</h2>}

      <div className="filter-icon">
        <button onClick={() => setShowFilterOptions(!showFilterOptions)}>
          <LuSlidersHorizontal />
        </button>
        {showFilterOptions && (
          <div className="filter-options">
            <button
              onClick={() => handleFilteredClick("trending")}
              className={selectedFilter === "trending" ? "selected" : ""}
            >
              <BsFire />
              Trending
            </button>
            <button
              onClick={() => handleFilteredClick("latest")}
              className={selectedFilter === "latest" ? "selected" : ""}
            >
              <BiUpArrow />
              Latest
            </button>
            <button
              onClick={() => handleFilteredClick("oldest")}
              className={selectedFilter === "oldest" ? "selected" : ""}
            >
              <BiDownArrow />
              Oldest
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
