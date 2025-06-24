import React from "react";
import techStack from "../utils/techStack";
import "../styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="tech-stack-container">
      <h2>Skills</h2>
      <div className="tech-stack-marquee">
        <div className="scroll-track">
          {techStack.map((tech, index) => (
            <div className="tech-stack-item" key={index}>
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
              <p>{tech.name}</p>
            </div>
          ))}
          {techStack.map((tech, index) => (
            <div className="tech-stack-item" key={index}>
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
