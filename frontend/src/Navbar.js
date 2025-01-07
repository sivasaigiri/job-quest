import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
 // Add a separate CSS file for the Navbar if needed.
import "./styles/Navbar.css"
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        JobQuest
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/jobs">Jobs</CustomLink>
        <CustomLink to="/login">LogIn</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
