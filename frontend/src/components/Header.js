import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">The Pet Haven</h1>
      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#pets">Featured Pets</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
