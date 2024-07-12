import React from 'react';
import ProjectCard from './projectCard';
import '../styles/projectCard.css'; // Import your CSS file for styling
import ProjectList from '../utils/projectList'; // Import the projects array from your data file

const ProjectsFlex = () => {
  return (
    <div className="projects-list">
      {ProjectList.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsFlex;
