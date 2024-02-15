import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";




function App() {
  return (

     <Router>
       <div>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
      </div>
    </Router>

  );
}

export default Projects;
