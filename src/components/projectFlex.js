import React from 'react';
import ProjectCard from './projectCard';
import '../styles/projectList.css'; 
import ProjectList from '../utils/projectList';

const ProjectsFlex = () => {
  return (
    <div className='proFlex'>
      {ProjectList.map((project, index) => (
        <ProjectCard className="project-card" key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsFlex;
