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

        {/* -----------------------------------------box frames */}
        <div className="bodyFrame0"></div>

        <div className="bodyFrame1"></div>
        {/* ------------------------------------------------------------------- */}

        <div className="Services-cage">
          <div className="Services-heading">
            <div className="text-hi">Hi!</div>

            <div className="itsMe">it’s me</div>
            <div className="myName">Abongile Tshopi</div>
            <div className="and">
              And I am a{" "}
              <span className="Junior">Junior Software Developer</span>{" "}
            </div>
          </div>

          {/* <div className="homepage-image">
            <img
              className="homePagePic"
              alt="aboutPagePic"
              src="ap.png"
              height={"500"}
              width={"258"}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default aboutPage;
