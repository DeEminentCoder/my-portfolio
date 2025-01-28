/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import "../AboutMe.css";

const AboutMe = () => {
  const navButtonRef = useRef(null); // Ref to store the navigation button element

  const handleDownloadClick = () => {
    if (navButtonRef.current) {
      // Simulate blinking effect using CSS class toggle
      navButtonRef.current.classList.toggle("blink");
      setTimeout(() => {
        navButtonRef.current.classList.toggle("blink");
      }, 1000); // Adjust timeout for blink duration (1 second here)
    }
  };

  useEffect(() => {
    // Optional: Pre-fetch the navigation button element on component mount
    const navButton = document.getElementById("dropdown");
    if (navButton) {
      navButtonRef.current = navButton;
    }
  }, []);

  return (
    <>
      <section
        id="About-me"
        className="d-grid justify-content-center align-items-center position-relative container-fluid p-5 bg- about-me-container"
      >
        <h1 className="hidden display-3 text-center">About Me</h1>
        <div className="hidden row d-flex justify-content-center align-content-center p-4 m-lg-5 rounded-4 gap-1 about-me shadow ">
          <div className="col-4 about-left">
            <img
              src="fb.jpg"
              alt=""
              width={300}
              className="rounded-4 about-img shadow p-1 "
            />
          </div>
          <div className="col about-right ">
            <h2 className="text-white fw-semibold py-3">
              I'm A Certified Front-End Developer
            </h2>
            <span className="text-white ">
              Hello, my name is Kehinde Olaleye, and I'm a front-end engineer
              specializing in building modern web experiences with HTML, CSS,
              Tailwind, WordPress, SEO, and Figma. I'm passionate about creating
              of my clients. I'm also a strong believer in the importance of
              and technologies in the web development field.
            </span>
            <div className="row p-3 d-flex align-content-start justify-content-start gap-3">
              <a
                href="#Contact"
                className="text-decoration-none link-light btn btn-lg btn-outline-light col-sm-4 col-12"
              >
                <i className="fas fa-sms shadow-sm"></i>

                <span> Contact Me</span>
              </a>
              <a
                id="download-CV-butt"
                href=""
                className="btn btn-lg btn-danger col-sm-4 col-12 "
                onClick={handleDownloadClick}
              >
                <i className="fa fa-file-o file"> </i>
                <span> Download CV</span>
              </a>
            </div>
          </div>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </>
  );
};

export default AboutMe;
