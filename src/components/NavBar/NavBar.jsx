import "./NavBar.css";
import React from "react";


const NavBar = () => {

  return (
     <nav className="nav-bar">
      <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
  );
};

export default NavBar;

