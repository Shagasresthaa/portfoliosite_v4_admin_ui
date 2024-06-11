import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavbarTemplate = ({ links, brandName, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        {links.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="nav-brand">
        <Link to="/home">{brandName}</Link>
      </div>
      <div className="nav-actions">
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavbarTemplate;
