import "./Services.css";
import React from "react";
import soundFile from './cardFlips.mp3';

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


    <div>
        <div className="myServices">My Services</div>
    </div>
{/* ------------------my cards-------------------------------- */}


<div className="servicesCage">
{/* ---------------------design card---------------- */}
<div class="designCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">Designer</p>
                <img className="designIcon" alt="designIcon" src="design-icon.png" width={100} height={100} />
                <p>I craft visually appealing and user-friendly interfaces 
                  for websites and applications.</p>
            </div>
            <div class="backSide">
                <p class="title">Technologies I use:</p>
                <img className="designToolIcon" alt="designIcon" src="design-tool.png" width={100} height={100} />
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
                <p class="title">FrontEnd</p>
                <img className="frontEndIcon" alt="frontEndIcon" src="front.gif" width={100} height={100} />
                <p>Structuring web content for browsers. Implementing anime to enhance user experience.
                    Ensuring websites function consistently across different browsers.</p>
            </div>
            <div class="backSide">
                <p class="title">Technologies I use:</p>
                <p>   HTML & CSS<br></br>
                      JavaScrip <br></br>
                      React<br></br>
                      Anjular<br></br>
                </p>
            </div>
        </div>
</div>

{/* -------------------BackEnd ----------------------*/}
<div className="backEndCard">
<div class="innerCard">
            <div class="frontSide">
                <p class="title">Backend</p>
                <img className="frontEndIcon" alt="backEndIcon" src="database-gif.gif" width={100} height={100} />
                <p>Designing and interacting with databases to store and retrieve information. 
                  Creating interfaces for communication between different parts of a software application.</p>
            </div>
            <div class="backSide">
                <p class="title">Technologies I use:</p>
                <p>   
                  SQLite<br></br>
                  Java<br></br>
                  Python<br></br>
                  Node Js<br></br>
                  Email Js<br></br>
                </p>
            </div>
        </div>
</div>


</div>









  {/* closinf the main frames */}
    </div>
</div>  
  );
}



class DesignCard extends React.Component {
  playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  render() {
    return (
      <div className="designCard" onMouseEnter={this.playSound}>
      </div>
    );
  }
}

export default servicesPage;
