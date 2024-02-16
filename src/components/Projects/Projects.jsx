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

            <div className="bankAppBox" data-info="Empower your financial journey with our mobile banking app. 
                                                  Seamlessly manage your accounts, transfer funds effortlessly, 
                                                  and stay in control of your finances on the go">
                <span></span>
                <div className="bankName">BankApp</div>
            </div>


            <div className="sneshAppBox" data-info ="With easy customization options and a user-friendly interface, 
                                                    our bakery app is your gateway to a world of sweetness and simplicity. 
                                                    Elevate your pastry experience . It's time to treat yourself!">
              <span></span>
              <dive className="sneshName">BakeryApp</dive>
            </div>

            <div className="financeAppBox" data-info="Enjoy precision and convenience with features like 
                                                      customizable investment projections, 
                                                      loan amortization schedules, and real-time currency conversion.">
              <span></span>
              <div className="financeName">FinanceApp</div>
            </div>

            
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
