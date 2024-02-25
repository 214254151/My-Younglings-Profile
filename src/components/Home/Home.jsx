import "./Home.css";
import React from "react";


function Home() {
  return (
    <div className="mainAppFrame">
      <div className="mainFrame">
        
        <div class="container">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

       
        <div className="homepage-content">
          <div className="homepage-roles">
            <div className="text-hi">Hi!</div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="itsMe">it’s me</div>
            <div className="myName">Abongile <span>Tshopi</span></div>
            <div className="and">
              And I am a{" "}
              <span className="Junior">Junior <span>Software</span> Developer</span>{" "}
            </div>

            <p className="enthusiastic-junior">
              <i>
                Enthusiastic Junior Software Developer with a dedication to
                creating quality software solutions <br />
                and delivering impactful work across the development stack.
              </i>
            </p>
          </div>

          

          <div className="homepage-image">
            <img
              className="homePagePic"
              alt="homePagePic"
              src="homePagePic.png"
              height={"500"}
              width={"258"}
            />
          </div>
        </div>

        <div className="cv-button-box">
          <a href="/ABONGILE TSHOPI'S RESUME.pdf"></a>
              <button type="cv-button" >Donwload CV</button>
            </div>

            {/* <div className="cv-button-box">
          <a href="/ABONGILE TSHOPI'S RESUME.pdf"></a>
              <button type="linkedinBtn" ></button>
            </div> */}

        <div className="waves-cage">
          <img className="waves" alt="wavesPic" src="waves.png" />
        </div>
      </div>
    </div>
  );
}

export default Home;
