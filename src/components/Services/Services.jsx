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


<div className="servicesCage">
{/* ---------------------design card---------------- */}
<div class="designCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">Designer</p>
                <img className="designIcon" alt="designIcon" src="design-icon.png" width={150} height={150} />
                <p>I craft visually appealing and user-friendly interfaces 
                  for websites and applications.</p>
            </div>
            <div class="backSide">
                <p class="title">Technologies I use:</p>
                <p> Adobe Pack<br></br>
                      MarvelApp<br></br>
                      Figma<br></br>
                      Lucidchart<br></br>
                      SmartDraw<br></br>
                      Balsamiq
                </p>
            </div>
        </div>
    </div>

{/* -------------------FrontEnd ----------------------*/}
<div className="frontEndCard">
<div class="innerCard">
            <div class="frontSide">
                <p class="title">Designer</p>
                <img className="designIcon" alt="designIcon" src="design-icon.png" width={150} height={150} />
                <p>I craft visually appealing and user-friendly interfaces 
                  for websites and applications.</p>
            </div>
            <div class="backSide">
                <p class="title">Technologies I use:</p>
                <p> Adobe Pack<br></br>
                      MarvelApp<br></br>
                      Figma<br></br>
                      Lucidchart<br></br>
                      SmartDraw<br></br>
                      Balsamiq
                </p>
            </div>
        </div>

</div>



    </div>
{/*
    <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">FRONT SIDE</p>
                <p>Hover Me</p>
            </div>
            <div class="backSide">
                <p class="title">BACK SIDE</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div> */}
  
    </div>
</div>  
  );
}

export default servicesPage;
