import React, { useState } from "react";
import "./Navbar.css";
import main1 from "../Assests/main1.png";
import cart from "../Assests/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import LoginSignup from "../../Pages/LoginSignup";
import ShopCategory from "../../Pages/ShopCategory";
import Home from "../../Pages/Home";
import Cart from "../../Pages/Cart";
// ...other imports...
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
          <NavLink to="/" end>Home</NavLink>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("curtains");
          }}
        >
          <Link to="/curtains">Curtains</Link>
          {menu === "curtains" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("couches");
          }}
        >
          <Link to="/couches">Couches</Link>
          {menu === "couches" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("bedding");
          }}
        >
          <Link to="/bedding">Bedding</Link>
          {menu === "bedding" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ornaments");
          }}
        >
          <Link to="/ornaments">Ornaments</Link>
          {menu === "ornaments" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("lamps");
          }}
        >
          <Link to="/lamps">Lamps</Link>
          {menu === "lamps" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
