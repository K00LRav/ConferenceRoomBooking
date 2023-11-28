import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
