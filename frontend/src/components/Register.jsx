import React, { useState } from "react";
import "../styles/Register.css"; // Make sure to create this file

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="reg">
    <div className="register-container">
      <div className="register-box">
        <div className="icon">
          <img
            src="/Acc.svg"
            alt="User Icon"
            className="user-icon"
          />
        </div>
        <form className="register-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="username@gmail.com"
            required
          />

          <label htmlFor="password">Choose Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder=".........."
              required
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <label htmlFor="confirmPassword">Retype Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder=".........."
            required
          />

          <button type="submit" className="register-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
