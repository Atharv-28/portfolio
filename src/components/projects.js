import React from "react";
import "../styles/projects.css";
import ProjectsFlex from "./projectFlex";

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="projects-content">
        <h2>Projects</h2>
        <ProjectsFlex className="project-flex" />
      </div>
    </div>
  );
};

export default Projects;
