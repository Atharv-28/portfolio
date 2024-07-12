import React from "react";
import { Link } from "react-router-dom";
import "../styles/projectCard.css"

const ProjectCard = ({ project }) => {
  const ico = project.icon;
  console.log(ico);
  return (
    <div className="project-card">
      <Link
        to={`/project-details/${project.projectName}`}
        className="project-link"
      >
        <img
          src={ico}
          alt={`${project.projectName} Icon`}
          className="project-icon"
        />
        <div className="project-details">
          <h3 className="project-name">{project.projectName}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <Link
              to={`/project-details/${project.projectName}`}
              className="project-link"
            >
              View Details
            </Link>
            {project.gitLink && (
              <a
                href={project.gitLink}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
