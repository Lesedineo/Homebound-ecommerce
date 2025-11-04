import React from "react";
import "./CSS/loginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>CONTINUE</button>
        <p className="loginsignup-login">
          Already have an account? <a href="/login">Log In Here</a>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            I agree to the{" "}
            <a href="/terms">Terms and Conditions & Privacy Policy</a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
