import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";

import AboutContent from "../components/AboutContent";
import ProjectList from "../components/ProjectList";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutContent />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
