import React from "react";
import "./Footer.css";
import footer_logo from "../Assests/main.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Homebound Logo" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Privacy Policy</li>
      </ul>

      <div className="footer-icons-container">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

      <div className="footer-copyright">
        <p>© 2024 Homebound. All rights reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
