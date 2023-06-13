import React from "react";

export const NightMode = () => {
  return (
    <div class="switch">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
    </div>
  );
};
