import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/logo.png"; // make sure logo.png exists in src/assets/

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side: logo + name */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand-name">
          <span className="black">Shik</span>
          <span className="green">sha</span>
        </span>
      </div>

      {/* Middle: navigation links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right side: login/signup */}
      <div className="navbar-auth">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
