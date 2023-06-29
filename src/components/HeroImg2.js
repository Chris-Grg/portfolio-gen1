import "./HeroImg2Styles.css";
import React from "react";
import ProjectImg from "../assets/code.jpg";
import ContactImg from "../assets/keyboard.jpg";
import AboutImg from "../assets/laptop-dark.jpg";

const HeroImg = ({ type }) => {
  let img;
  if (type === "project") {
    img = ProjectImg;
  } else if (type === "contact") {
    img = ContactImg;
  } else {
    img = AboutImg;
  }
  return (
    <div className="hero2">
      <div className="mask2">
        <img className="intro-img2" src={img} alt="IntoImg"></img>
      </div>
      <div className="content2">
        {type === "project" ? (
          <>
            <h1>Projects</h1>
            <p>Check out some of my projects</p>
          </>
        ) : type === "contact" ? (
          <>
            <h1>Contact</h1>
            <p>Let's talk!</p>
          </>
        ) : (
          <>
            <h1>About Me</h1>
            <p>Hi heres somethings about me</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroImg;
