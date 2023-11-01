import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>My Website</h1>
      <nav>
        <ul className="bar">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
