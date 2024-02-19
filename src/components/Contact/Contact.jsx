import "./Contact.css";
// import React from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function template() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


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

    
        
    
{/* ------------------Contact page-------------------------------- */}
<div className="contactText">Let's get in <span>touch</span></div>
    
        <div className="contactFormBox">

          <form ref={form} onSubmit={sendEmail}>
              <div className="fullName-box">
                <input type="text" placeholder="Full Name" id="fullName"></input>
              </div>

              <div className="email-box">
                <input type="text" placeholder="Your email" id="emailAddress"></input>
              </div>

              <div className="message-box">
                <textarea name="message" id="message" cols="21" rows="5" placeholder="Your Message"></textarea>
              </div>

              <div className="button-box">
                <button type="submit">Submit</button>
              </div>
          </form>
          
        </div>

        <div className="contactImage">
        <img className="circle-icons" src="circle-icons.png" />
        </div>

        



  {/* closinf the main frames */}
</div>  
</div>
  );
}
export default template;
