import { React, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    }
    else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
    return (
      <div className={color ? "header header-bg" : "header"}>
        <a href="/">
          <h1>portfolio</h1>
        </a>
        {/* yaha pe bhi if else condition lagegi , agar nav menu active hoga hrefh me nav as dikhana chaunga aur agar ye nhi hai hrefh fir me normal nav menu pe jana chaunga  */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/project">Project</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {/* /*agar mujhehamburger menu click hai hrefh ye close hojaye isme if else lagaye hai  */}
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    );
  };

  export default Navbar;
