import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <img className="logo" alt="logo" src="logo.png" />

        <div className="menu-cage">
          <Link to="/" className="home-cage" style={{ textDecoration: "none" }}>
            <div className="text-wrapper">Home</div>
          </Link>

          <Link to="/about" className="about-cage" style={{ textDecoration: "none" }}>
            <div className="text-wrapper">About</div>
          </Link>

          <Link to="/services" className="services-cage" style={{ textDecoration: "none" }}>
            <div className="text-wrapper">Services</div>
          </Link>

          <Link to="/projects" className="projects-cage" style={{ textDecoration: "none" }}>
            <div className="text-wrapper">Projects</div>
          </Link>

          <Link to="/contact" className="contact-cage" style={{ textDecoration: "none" }}>
            <div className="text-wrapper">Contact</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;