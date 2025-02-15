import React from "react";
import introImg from "./prof.png";
import Contact from "./contact";
import BlurText from "./BlurText";

import "../styles/intro.css";

const Intro = () => {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div id="intro" className="intro">
      <div className="intro-image">
        <img className="img-prof" src={introImg} />
      </div>
      <div className="intro-text">
        <p>Hi,</p>
        <BlurText
          text="I'm Atharv Tambekar"
          delay={450}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl mb-8"
        />
        <h2></h2>
        <h3>M-E-R-N Stack Developer | Mobile App Developer (React-Native)</h3>
        <Contact />
      </div>
    </div>
  );
};

export default Intro;
