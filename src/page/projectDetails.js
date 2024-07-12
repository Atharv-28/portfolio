// ProjectDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectList from '../utils/projectList'; // Assuming project list is stored in a separate file

const ProjectDetails = () => {
  const { projectName } = useParams(); // Get the project name from URL params

  // Find the project details from the list based on projectName
  const project = ProjectList.find(proj => proj.projectName === projectName);

  if (!project) {
    return <div>Project not found</div>; // Handle case where project is not found
  }

  return (
    <div className="project-details-container">
      <h2>{project.projectName}</h2>
      <div className="project-description">
        <p>{project.description}</p>
      </div>
      <div className="project-links">
        {project.gitLink && (
          <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
