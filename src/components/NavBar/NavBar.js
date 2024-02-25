import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Assuming you have a CSS file named NavBar.css for styling

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));

    // Hide all menu items when menu icon is clicked
    const menuItems = ["about-cage", "home-cage", "services-cage", "projects-cage", "contact-cage"];
    menuItems.forEach(item => {
      const element = document.getElementsByClassName(item)[0];
      if (element) {
        element.classList.toggle("hide");
      }
    });
  };

  render() {
    return (
      <div className="nav-bar">
        <img className="logo" alt="logo" src="logo.png" />

        <button className="menu__icon" onClick={this.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

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
