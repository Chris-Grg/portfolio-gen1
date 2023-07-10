import "./HeroImgStyles.css";
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
          <Link
            to="https://drive.google.com/file/d/1Pxt0LvkTdlGn6UDFmtaAxdm646miuq6x/view?usp=sharing"
            target="_blank"
            className="btn"
          >
            Resume
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
