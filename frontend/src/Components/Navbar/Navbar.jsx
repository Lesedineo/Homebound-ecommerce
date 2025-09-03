import React from "react";
import { useState } from "react";
import "./Navbar.css";
import main1 from "../Assests/main1.png";
import cart from "../Assests/cart_icon.png";
export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={main1} alt="Main Logo" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          Home{menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("curtains");
          }}
        >
          Curtains{menu === "curtains" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("couches");
          }}
        >
          Couches{menu === "couches" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("bedding");
          }}
        >
          Bedding{menu === "bedding" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ornaments");
          }}
        >
          Ornaments{menu === "ornaments" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("lamps");
          }}
        >
          Lamps{menu === "lamps" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="Cart Icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
