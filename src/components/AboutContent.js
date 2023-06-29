import "./AboutContentStyles.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="left">
          <h1>Introduction</h1>
          <p>
            Hello! I'm Chris Gurung, a recent graduate of Bachelor's in Computer
            Engineering. I have a passion for web development, particularly in
            building interactive and user-friendly applications using React.
          </p>
        </div>
        {/* <div className="right">
        <div className="img-container">
        <div className="img-stack-top"></div>
        </div>
    </div> */}
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skill">
          <div className="lang">
            <FaHtml5 style={{ color: "red" }} className="skill-icon" />
            <span>HTML</span>
          </div>
          <div className="lang">
            <FaCss3Alt style={{ color: "#1572B6" }} className="skill-icon" />
            <span>CSS</span>
          </div>
          <div className="lang">
            <FaJs style={{ color: "#F7DF1E" }} className="skill-icon" />
            <span>JavaScript</span>
          </div>
          <div className="lang">
            <FaReact style={{ color: "#61DAFB" }} className="skill-icon" />
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
