import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";



const Contact = () => {
  
  const [captchaValue, setCaptchaValue] = useState("");


  function onChange(value) {
    setCaptchaValue(value);
  }

  function sendEmail(e) {
    e.preventDefault();

    if (!captchaValue) {
      console.log("Please verify that you are not a robot.");
      return;
    }

    emailjs
      .sendForm(
        "service_hbk7euh",
        "template_a9vmwra",
        e.target,
        "6NiPt78fOH83-6DKU"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="mainAppFrame">
      <div className="mainFrame">
        {/* ------------------Contact page-------------------------------- */}
        <div className="contactText">
          Let's get in <span>touch</span>
        </div>

        <div className="contactFormBox">
          <form onSubmit={sendEmail}>
            <div className="fullName-box">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName" 
                
              ></input>
            </div>

            <div className="email-box">
              <input
                type="text"
                placeholder="Your email"
                name="emailAddress"
               
              ></input>
            </div>

            <div className="message-box">
              <textarea
                name="message"
                cols="21"
                rows="5"
                placeholder="Your Message"
                
              ></textarea>
            </div>

            <div className="button-box">
              <button type="submit">Submit</button>
            </div>

            <div className="recaptcha-box">
              <ReCAPTCHA
                sitekey="6LeCt3spAAAAAIliDLIX6EtFXb4R3tQoBrXuD5ni"
                onChange={onChange}
                size="normal"
              />
            </div>
          </form>
        </div>

        <div className="contactImage">
          <img className="circle-icons" src="circle-icons.png" />
        </div>

        {/* closing the main frames */}
      </div>
    </div>
  );
};
export default Contact;
