import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="logo">
        <h1>JobQuest</h1>
      </div>
      <nav className="nav-links">
        <NavLink to="/" exact className={location.pathname === "/" ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/about" className={location.pathname === "/about" ? "active" : ""}>
          About
        </NavLink>
        <NavLink to="/jobs" className={location.pathname === "/jobs" ? "active" : ""}>
          Jobs
        </NavLink>
        <NavLink to="/login" className={location.pathname === "/login" ? "active" : ""}>
          LogIn
        </NavLink>
        <NavLink to="/register" className={location.pathname === "/register" ? "active" : ""}>
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
