import "./ProjectCardStyle.css";
import React, { useState } from "react";

import ProjectCard from "./ProjectCard";
import ProjectCardData from "../data/ProjectCardData";
const ProjectList = () => {
  const [sort, setSort] = useState({ All: true, React: false, js: false });
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="sort-by">
        <button onClick={() => setSort({ All: true, React: false, js: false })}>
          All
        </button>
        <button onClick={() => setSort({ All: false, React: true, js: false })}>
          React
        </button>
        <button onClick={() => setSort({ All: false, React: false, js: true })}>
          Js
        </button>
      </div>
      <div className="project-container">
        {sort.js === true
          ? ProjectCardData.filter((data) => data.code === "js").map(
              (val, index) => (
                <ProjectCard
                  key={index}
                  imagesrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  view={val.view}
                  source={val.source}
                />
              )
            )
          : sort.React === true
          ? ProjectCardData.filter((data) => data.code === "react").map(
              (val, index) => (
                <ProjectCard
                  key={index}
                  imagesrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  view={val.view}
                  source={val.source}
                />
              )
            )
          : ProjectCardData.map((val, index) => (
              <ProjectCard
                key={index}
                imagesrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
              />
            ))}
      </div>
    </div>
  );
};

export default ProjectList;
