import React from "react";
import "./Footerstyles.css";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#FFD700", marginRight: "2rem" }}
            />
            <div>
              <p>Nakhipot, Lalitpur-14, Kathmandu</p>
              <p>Nepal</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#FFD700", marginRight: "2rem" }}
              />
              +977 9843807086
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#FFD700", marginRight: "2rem" }}
              />
              chris.grg7@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            This is me Chris Gurung. I enjoy coding, checking out new
            innovations, anime, gaming and Football. I enjoy taking on new
            projects and all the challenges that come with it.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/chris-gurung/" target="_blank">
              <FaLinkedin
                href="https://linkedin.in/chris-gurung"
                size={30}
                style={{ color: "#0077B5", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://github.com/chris-grg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">Chris Gurung 2023</p>
    </div>
  );
};

export default Footer;
