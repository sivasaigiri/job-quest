import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
 // To handle redirection

const Login = () => {
  const [email, setEmail] = useState("");  // State for email
  const [password, setPassword] = useState("");  // State for password
  const navigate = useNavigate();  // Use navigate to handle redirection

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission
    if (email && password) {
      // If both email and password are entered, perform login logic
      alert("Logged in successfully!");
      navigate("/");  // Redirect to homepage or other destination after successful login
    } else {
      alert("Please enter both email and password.");
    }
  };

  const handleForgotPassword = () => {
    alert("Redirecting to forgot password page...");
    // Add the logic for forgot password (e.g., navigate to forgot password page)
    navigate("/forgot-password");  // Assuming a route exists for forgotten password
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="username@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Update email state
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Update password state
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <p className="forgot-password" onClick={handleForgotPassword}>
          Forgot my password?
        </p>
      </form>
    </div>
  );
};

export default Login;
