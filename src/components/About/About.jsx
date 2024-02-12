import "./About.css";
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function aboutPage() {
  return (
    <div className="mainAppFrame">
      <div className="mainFrame">
        <div className="nav-bar">
          <img className="logo" alt="logo" src="logo.png" />

          <div className="menu-cage">
            <div className="home-cage">
              <div className="text-wrapper">Home</div>
            </div>

            <div className="about-cage">
              <div className="text-wrapper">About</div>
            </div>

            <div className="services-cage">
              <div className="text-wrapper">Services</div>
            </div>

            <div className="projects-cage">
              <div className="text-wrapper">Projects</div>
            </div>

            <div className="contact-cage">
              <div className="text-wrapper">Contact</div>
            </div>
          </div>
        </div>

      
        <div className="bodyFrame0"></div>

        <div className="bodyFrame1"></div>
        {/* ------------------------------------------------------------------- */}
      </div>
    </div>
  );
}

export default aboutPage;
