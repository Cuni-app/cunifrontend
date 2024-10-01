import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const LandNavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Main</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LandNavBar;