

import React from "react";

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          
          <div>
            <p>Dilshad Garden Delhi</p>
            <p>India</p>
          </div>
          </div>
          <div classname = "phone">
          <h4>
          <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          + 91 9990315752</h4>
          
          </div>

          <div classname = "email">
          <h4>
          <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
         agg23052002@gmail.com</h4>
          
          </div>
        </div>

        <div className="right">
            <h4>About the abhizz compony</h4>
            <p>Polypropylene belongs to the group of polyolefins and is partially crystalline and non-polar. Its properties are similar to polyethylene, but it is slightly harder and more heat resistant. It is a white, mechanically rugged material and has a high chemical resistance</p>
        <div className="social">
        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
