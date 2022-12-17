import "./HeroSection.css";
import React from "react";
import IntroImg from "../../assets/pic2.jpeg";


const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="mask">
        <img className="inhref-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I AM A FRONT-END DEVELOPER</p>
   
        <h1>React DEVELOPER</h1>
        <div>
          <a href="/project" className="btn">
            PROJECTS
          </a>
          <a href="/contact" className="btn">
            CONTACT
          </a>
        </div>
      </div>
    </div>
    </>
  );
};
export default Hero;



