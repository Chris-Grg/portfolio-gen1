import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ProjectList from "../components/ProjectList";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 type="project" />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Project;
