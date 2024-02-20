import "./Contact.css";
// import React from "react";
import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";

function template() {

// --------------------------------------------------------------
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    emailAddress: '',
    message: ''
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validateForm()){
      sendEmail();
    }
  };

  const validateForm = () =>{
    let valid = true;
    const newErrors = {...errors};
    
    //Validating Full name
    if(!formData.fullName.trim()){
      newErrors.fullName = 'Full name is requred';
      valid = false; 
    }
    else if(!/^[a-zA-Z ]+$/.test(formData.fullName.trim())){
      newErrors.fullName = 'Please  enter a valid full name';
      valid = false;
    }
    else{
      newErrors.fullName='';
    }

    //Validating email address
    if(!formData.emailAddress.trim()){
      newErrors.emailAddress = 'Email Address is require';
      valid = false;
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())){
      newErrors.emailAddress = 'Please enter a valid Email Address';
      valid = false;
    }
    else{
      newErrors.emailAddress = '';
    }

    //Validating the message
    if(!formData.message.trim()){
      newErrors.message = 'Message is required';
      valid = false;
    }
    else{
      newErrors.message = '';
    }
    setErrors(newErrors);
    return valid;
  };

  


// ---------------------------------------------------------------

  function sendEmail(e) {
    e.preventDefault();

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
        <div className="contactText">
          Let's get in <span>touch</span>
        </div>

        <div className="contactFormBox">
          <form onSubmit={handleSubmit}>
            <div className="fullName-box">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              ></input>
              {errors.fullName && <div className="error">{errors.fullName}</div>}
            </div>

            <div className="email-box">
              <input
                type="text"
                placeholder="Your email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
              ></input>
              {errors.emailAddress && <div className="error">{errors.emailAddress}</div>}
            </div>

            <div className="message-box">
              <textarea
                name="message"
                cols="21"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <div className="error">{errors.message}</div>}
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
