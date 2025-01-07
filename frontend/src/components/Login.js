import React, { useState } from "react";
import "../styles/Login.css"

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="log">
    <div className="login-container">
      <div className="login-box">
        <div className="icon">
          <i className="fas fa-user-circle"></i>
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="username@gmail.com" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="********"
                required
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button">
            login
          </button>
          <p className="forgot-password">forgot my password?</p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
