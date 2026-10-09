import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './projectCard';
import '../styles/projectList.css'; 
import ProjectList from '../utils/projectList';

const ProjectsFlex = () => {
  const projectsContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const projectsContainer = projectsContainerRef.current;

    if (!projectsContainer || ProjectList.length <= 2) {
      return undefined;
    }

    const scrollProjects = () => {
      const lastScrollPosition = projectsContainer.scrollWidth - projectsContainer.clientWidth;

      if (projectsContainer.scrollLeft >= lastScrollPosition - 1) {
        projectsContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        projectsContainer.scrollBy({
          left: projectsContainer.clientWidth,
          behavior: 'smooth',
        });
      }
    };

    const intervalId = window.setInterval(() => {
      if (!isPaused) {
        scrollProjects();
      }
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div
      className="proFlex"
      ref={projectsContainerRef}
      aria-label="Projects carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {ProjectList.map((project, index) => (
        <ProjectCard className="project-card" key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsFlex;
