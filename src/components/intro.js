import React from "react";
import introImg from "./prof.png";
import Contact from "./contact";
import BlurText from "./BlurText";
import SplitText from "./SplitText";

import "../styles/intro.css";

const Intro = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div id="intro" className="intro">
      <div className="intro-image">
        <img className="img-prof" src={introImg} />
      </div>
      <div className="intro-text">
        <SplitText
          text="Hello,"
          className="text-2xl font-semibold text-left"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <BlurText
          text="I'm Atharv Tambekar"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
        <h3>M-E-R-N Stack Developer | Mobile App Developer (React-Native)</h3>
      </div>
    </div>
  );
};

export default Intro;
