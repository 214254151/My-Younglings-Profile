import "./App.css";
// import About from "./components/About/About";
// import About from './components/About/About';



function App() {
  return (
    // <div className="App">
    //   <About/>
    // </div>



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

            <div className="project-cage">
              <div className="text-wrapper">Projects</div>
            </div>

            <div className="contact-cage">
              <div className="text-wrapper">Contact</div>
            </div>
          </div>
        </div>

        <div className="homepage-content">
          <div className="homepage-roles">
            <div className="text-hi">Hi!</div>
            <br></br>
            <br></br>
            <br></br><br></br><br></br>
            <br></br>
            <br></br>
            
            <div className="itsMe">it’s me</div>
            <div className="myName">Abongile Tshopi</div>
            <div className="and">And I am a <span className="Junior">Junior Software Developer</span> </div>
            {/* <div className="Junior">Junior Software Developer</div> */}

            <p className="enthusiastic-junior"><i>
              Enthusiastic Junior Software Developer with a dedication to
              creating quality software solutions <br />
              and delivering impactful work across the development stack.</i>
            </p>
          </div>

          <div className="homepage-image">
            <img
              className="homePagePic"
              alt="homePagePic"
              src="homePagePic.png"
              height={"500"} width={"258"}
            />
          </div>
          
        </div>

        <div className="waves-cage">
          <img className="waves" alt="wavesPic" src="waves.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
