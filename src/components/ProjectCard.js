import "./ProjectCardStyle.css";
import React from "react";

import { NavLink } from "react-router-dom";

const ProjectCard = ({ imagesrc, title, text, view, source }) => {
  return (
    <div className="project-card">
      <img src={imagesrc} alt="project1" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <NavLink to={view} target="_blank" className="btn">
            View
          </NavLink>

          <NavLink to={source} target="_blank" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
