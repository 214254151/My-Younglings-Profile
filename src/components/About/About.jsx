import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { faAngular, faCss3, faFigma, faGit, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";

function aboutPage() {
  return (
    <div className="mainAppFrame">
      <div className="mainFrame">
    
        <div
          className="backgroundImage0"
          style={{
            backgroundImage: `url('/bout.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80%", width: "100%",
          }}
        />

        <div className="aboutBody">
          
        <div className="welcomeText"><h3>Welcome To My <span className="digitalSpace"><i>Digital Space</i></span></h3>
          
          <p>I'm a passionate software developer individual who is
              dedicated to improving skills through hands-on
              learning and development work.<br/>I am flexible and
              can adapt easily when required to work on
              multiple projects or tasks. <br/>I always set high
              standards for myself.</p>

              <h4>My interests <span>and hobbies</span></h4>

              <p>
              I am interested in learning about how patterns works,<br/> 
              the logic, the science. 
              Turning lines of code into a masterpiece of functionality.<br/> 
              Composing code by day, composing tunes by night.
              </p>

          </div>
          
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
