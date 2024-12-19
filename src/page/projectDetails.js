// src/pages/ProjectDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectList from '../utils/projectList'; 
import "../styles/projectDetails.css";

const ProjectDetails = () => {
  const { projectName } = useParams();

  const project = ProjectList.find(proj => proj.projectName === projectName);

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % project.snapshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + project.snapshots.length) % project.snapshots.length);
  };

  return (
    <div className="project-details-container">
      <div className='project-details-heading'>
      <img className='project-ico' src={project.icon} alt={`${project.projectName} Icon`} />
      <h2>{project.projectName}</h2>
      </div>
      <div className="project-description">
        <p>{project.description}</p>
        <p className='tech-stack'>Tech Stack used: {project.info}</p>
        <h3>Snapshots</h3>
        {project.snapshots.length > 0 ? (
          <div className="slideshow-container">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <img src={project.snapshots[currentSlide]} alt={`Snapshot ${currentSlide + 1}`} className="snapshot-image" />
            <button className="next" onClick={nextSlide}>&#10095;</button>
          </div>
        ) : (
          <p>No snapshots available.</p>
        )}
      </div>
      <div className="project-links">
        {project.gitLink && (
          <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo🔗
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
