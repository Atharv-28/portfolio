import React from "react";
import Career from "../components/career";
import Intro from "../components/intro";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import "../App.css";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="home">
      <Intro />
      <AboutMe />
      <Career />
      <Skills />
      <Footer />
    </div>
  );
};

export default HomePage;
