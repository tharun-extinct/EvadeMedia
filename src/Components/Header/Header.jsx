import React from 'react';
import {Link} from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <h2>Evade<span>Media</span></h2>
        </div>
        <div className="header__right">
             <Link to="home" smooth={true} duration={500}>
                <h4>Home</h4>
             </Link>
             <Link to="about" smooth={true} duration={500}>
                <h4>About</h4>
             </Link>
             <Link to="apply" smooth={true} duration={500}>
                <h4>Apply</h4>
             </Link>
             {/*<Link to="exp" smooth={true} duration={500}>
                <h4>Experience</h4>
               </Link>*/}
             <Link to="contact" smooth={true} duration={500}>
                <h4>Contact</h4>
             </Link>
             {/*<h4 classname="header__rightButton">Join with me</h4>*/}
        </div>
    </div>
  );
};
export default Header;