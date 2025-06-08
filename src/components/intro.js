import React from "react";
import introImg from "./prof.png";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import RotatingText from "./RotatingText";

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
        {/* <h3>M-E-R-N Stack Developer | Mobile App Developer (React-Native)</h3> */}
        <div className="div-rotating-text">
          <RotatingText
            texts={[
              "M-E-R-N Stack Developer",
              "Mobile App Developer (React-Native)",
              "Computer Science Engineer",
              "Software Developer",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className=" skill-text"
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
