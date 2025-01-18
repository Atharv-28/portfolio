import React from "react";
import Career from "../components/career";
import Intro from "../components/intro";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import Footer from "../components/footer";
import Fade from "react-reveal/Fade";
import "../App.css";

const HomePage = () => {
  return (
    <div className="home">
      <Fade bottom>
        <Intro />
      </Fade>
      <Fade bottom>
        <AboutMe />
      </Fade>
      <Fade bottom>
        <Career />
      </Fade>
      <Fade bottom>
        <Skills />
      </Fade>
      <Fade bottom>
        <Footer />
      </Fade>
    </div>
  );
};

export default HomePage;