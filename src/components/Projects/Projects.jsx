import "./Projects.css";
import React from "react";

function projects() {
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
          className="backgroundImage"
          style={{
            backgroundImage: `url('/3D-icon-Logo.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80%",
          }}
        >
          <img className="" src="" />
          {/* Your content here */}

          <div className="contactText" >
            <span>My </span>Projects
          </div>

          <div className="projectscontainer">
            <div className="bankAppBox"></div>

            <div className="sneshAppBox"></div>

            <div className="financeAppBox"></div>

            <div className="projectscontainer"></div>
          </div>
        </div>

        {/* ------------------my Projects page-------------------------------- */}

        {/*---------------- social media button icons----------------  */}
        {/* <div className="projectsImage">
          <img className="" src="" />
        </div> */}

        {/* <button type="submit">Submit</button> */}

        {/* closinf the main frames */}
      </div>
    </div>
  );
}
export default projects;
