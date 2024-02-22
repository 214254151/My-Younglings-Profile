import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";



import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import  Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <BrowserRouter>
     <NavBar>
      <Routes>
       <Route path="/" element = {<Home/>} />

        <Route path="/about" element = {<About/>}/>
        <Route path="/services" element = {<Services/>}/>
        <Route path="/projects" element = {<Projects/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/footer" element = {<Footer/>}/>
        
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
};

export default App;














