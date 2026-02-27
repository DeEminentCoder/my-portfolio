import React, { useRef, useEffect } from 'react';
import "../Hero.css";
import '../scrollanim.js'

const Hero = () => {
  // SCROLL ANIMATION AND TRANSITION EFFECTS
 
  const heroLeft = useRef(null); // Ref for the left element
  const heroRight = useRef(null); // Ref for the right element

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to remove observers when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array to run only once on initial render

  return (
    <>
      <div id='Hero' className="hero-container row p-2 display-1 ps-lg-5 gap-4 container-fluid m-0 d-sm-grid d-md-grid d-lg-flex">
        <div className="hidden hero-left col p-lg-5 my-lg-2 text-center text-lg-start p-sm-5 m-sm- ">
          <span className="hero-left-text">
            Hello!<span className="wave">👋 </span> I'm Kehinde Olaleye
          </span>
          <br />
          <span className="hidden hero-left-text2 ">A Front-End Engineer 👨‍💻</span>
          <br />
          <h6 className="hero-left-text3">
            Developing Modern, Responsive Web Applications Using HTML5
            <i className="fa fa-html5">,</i> CSS3<i className="fa fa-css3">, </i> and
            Javascript(React.js) <i className="bi bi-filetype-jsx"> </i>
          </h6>
          <a href="#" target="_blank" className="hidden btn text-light hire-me-btn">Hire Me</a>
          {/* Assign the element to the ref */}
          <div ref={heroLeft}></div>
        </div>
        <div className="hero-right col p-lg-5 my-lg-2 d-flex justify-content-center align-items-">
          <div className="carousel__container hidden">
            <div className="carousel-item shadow">
              <img className="carousel-item__img" src="pp.png" alt="Kennyimg" />
              <div className="carousel-item__details">
                <span className="controls fas fa-quote-left"></span>
                <h6 className="carousel-item__details--subtitle display-6">
                  I speak three languages: English, HTML,
                  <br /> and JavaScript
                </h6>
              </div>
            </div>
          </div>
          {/* Assign the element to the ref */}
          <div ref={heroRight}></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
