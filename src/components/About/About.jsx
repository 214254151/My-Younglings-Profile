import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { faAngular, faCss3, faFigma, faGit, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";


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


        <div
          className="backgroundImage0"
          style={{
            backgroundImage: `url('/bout.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80%", width: "100%",
          }}
        />


        <div className="bodyFrame0">

          <div className="welcomeText">Welcome To My Digital World</div>

        

        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face0">
              <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
            </div>

            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06519"/>
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faGit} color="#EFD81D"/>
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#ff7262"/>
            </div>

            

  
      
          </div>
        </div>
      </div>



{/* tags for closing the entire app */}
      </div>
    </div>
  );
}

export default aboutPage;
