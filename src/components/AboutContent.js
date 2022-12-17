  import "./AboutContentStyles.css";

  import React from 'react';
  import {Link} from "react-router-dom";


import pic2p from "../assets/pic2p.jpeg"

import pic3p from "../assets/pic3p.jpeg"

  const AboutContent = () => {
    return (
      <div className="About">
<div className="left">
<h1>Who Am I?</h1>
<p>i am a frontedn devloper. I create responsive secure websites for my free time </p>

<Link to="/contact">
    <button className="btn">Contact</button>
</Link>
</div>
    
    
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={pic2p}
            className="img" alt="true"/>
            </div>  
            <div className="img-stack bottom">
            <img src={pic3p}
            className="img" alt="true"/>
            </div>  
        </div>
      </div>
      </div>
      
    )
  }
  
  export default AboutContent;
  