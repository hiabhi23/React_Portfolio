import "./HeroSection.css";
import React from "react";
import IntroImg from "../../assets/pic2.jpeg";


const Hero = () => {
  return (
    <>
    <div className="hero" style={{backgroundImage: `url(${IntroImg})`}}>
      <div className="content">
          <div className="content-ct">
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
    </div>
    </>
  );
};
export default Hero;



