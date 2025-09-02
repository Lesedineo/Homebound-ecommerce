import React from "react";
import "./Navbar.css";
import main1 from "../Assests/main1.png";
import cart from "../Assests/cart_icon.png";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={main1} alt="Main Logo" />
      </div>
    </div>
  );
};
