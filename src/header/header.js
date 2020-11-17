import React from "react";
import FoodiestaLogo from "../../images/foodiesta-logo.png";

export const Header = () => {
  return (
    <div className="card-header welcome-header">
      <img src={FoodiestaLogo} alt="logo" style={{ width: 250 + "px" }} />
    </div>
  );
};
