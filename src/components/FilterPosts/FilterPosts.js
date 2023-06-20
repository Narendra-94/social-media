import React, { useContext, useState, useEffect } from "react";
import { LuSlidersHorizontal } from "react-icons/lu";
import "./filterposts.css";
import { BsFire } from "react-icons/bs";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { MediaContext } from "../../context/MediaContext";

export const FilterPosts = ({ selectedFilter, setSelectedFilter }) => {
  const { dispatch } = useContext(MediaContext);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  // const [selectedFilter, setSelectedFilter] = useState("latest");
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      handleFilteredClick("latest");
      setInitialRender(false);
    }
  }, [initialRender]);

  const handleFilteredClick = (filter) => {
    setSelectedFilter(filter);
    // dispatch({ type: "ON_CLICKING_FILTERED_BUTTON", payload: filter });
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
