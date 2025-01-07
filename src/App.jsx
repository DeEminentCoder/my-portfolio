// import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import "./AboutMe.css";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      {/* <NotFound></NotFound> */}
    </>
  );
};

export default App;
