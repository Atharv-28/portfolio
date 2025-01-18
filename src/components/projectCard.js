import React from "react";
import { Link } from "react-router-dom";
import "../styles/projectCard.css";

const ProjectCard = ({ project }) => {
  const ico = project.icon;
  console.log(ico);
  return (
    <div className="project-card">
        <div className="project-heading">
          <img
            src={ico}
            alt={`${project.projectName} Icon`}
            className="project-icon"
          />
          <h3 className="project-name">{project.projectName}</h3>
        </div>
        <div className="project-details">
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <Link
              to={`/project-details/${project.projectName}`}
              className="project-link"
            >
              View Details
            </Link>
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;
