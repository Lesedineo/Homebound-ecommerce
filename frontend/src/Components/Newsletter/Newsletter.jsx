import React from "react";
import "./newsletter.css";
export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>
        Subscribe to our newsletter and stay updated on the latest deals and
        offers!
      </p>
      <div>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
export default Newsletter;
