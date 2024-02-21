import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import  Footer from "./components/Footer/Footer";



function App() {
  return (
     <Router>
       <div>
        <NavBar/>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </Router>
  );
}

export default Contact;














