import "./HeroImgStyles.css";
import "./Typewriter.css";

import React from "react";
import IntroImg from "../assets/chill.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntoImg"></img>
      </div>
      <div className="content">
        <p>HI, I'M CHRIS GURUNG</p>
        <h1 className="typewriter">REACT DEVELOPER.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
