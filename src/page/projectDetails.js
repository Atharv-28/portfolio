import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectList from '../utils/projectList'; 
import "../styles/projectDetails.css";

const ProjectDetails = () => {
  const { projectName } = useParams();

  const project = ProjectList.find(proj => proj.projectName === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container">
        <img className='project-ico' src={project.icon} />
      <h2>{project.projectName}</h2>
      <div className="project-description">
        <p>{project.description}</p>
        <p>Tech Stack used: {project.info}</p>
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
