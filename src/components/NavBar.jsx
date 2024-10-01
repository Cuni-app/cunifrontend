import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Simulacros</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cuy">Cuy</Link>
        </li>
        <li className="navbar-item">
          <Link to="/ranking">Ranking</Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;