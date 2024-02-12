import "./Services.css";
import React from "react";

function servicesPage() {
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


        <div className="myServices">My Services</div>


{/* ------------------my cards-------------------------------- */}
        <div className="myCard">
          <div className="innerCard">
          <p class="title">I am a designer</p>
                <p>I design visual appealing UI/UX</p>
            </div>
            <div class="backSide">
                <p class="title">Technologies I use</p>
                <p>Figma</p>
            </div>

          </div>
        </div>

        </div>

       

      


       
     
  );
}

export default servicesPage;
