import React from "react";
import Career from "../components/career";
import Intro from "../components/intro";
import AboutMe from "../components/aboutMe";

const HomePage = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Career />
    </div>
  );
};

export default HomePage;
