import React from "react";
import { Link } from "react-router-dom";
import { FaAndroid, FaGlobe, FaLaptopCode, FaMicrochip } from "react-icons/fa";
import "../styles/projectCard.css";

const ProjectCard = ({ project }) => {
  const ico = project.icon;
  
  const getPlatformBadge = () => {
    const platform = project.platform;

    if (platform.includes('Website') && platform.includes('Android')) {
      return (
        <>
          <FaGlobe aria-label="Website" title="Website" />
          <FaAndroid aria-label="Android app" title="Android app" />
        </>
      );
    } else if (platform.includes('Android') && platform.includes('IoT')) {
      return (
        <>
          <FaAndroid aria-label="Android app" title="Android app" />
          <FaMicrochip aria-label="Internet of Things" title="Internet of Things" />
        </>
      );
    } else if (platform.includes('Android')) {
      return <FaAndroid aria-label="Android app" title="Android app" />;
    } else if (platform.includes('Website')) {
      return <FaGlobe aria-label="Website" title="Website" />;
    } else if (platform.includes('IoT')) {
      return <FaMicrochip aria-label="Internet of Things" title="Internet of Things" />;
    } else {
      return <FaLaptopCode aria-label="Application" title="Application" />;
    }
  };

  return (
    <div className="project-card">
        <div className="project-heading">
          <img
            src={ico}
            alt={`${project.projectName} Icon`}
            className="project-icon"
          />
          <div className="project-meta">
            <h3 className="project-name">{project.projectName}</h3>
            <div className="platform-badge">
              {getPlatformBadge()}
            </div>
          </div>
        </div>
        <div className="project-details">
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <button className="project-button">
              <Link
                to={`/project-details/${project.projectName}`}
                className="project-link"
              >
                View Details
              </Link>
            </button>
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;
