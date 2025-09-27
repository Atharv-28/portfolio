import React from "react";
import { Link } from "react-router-dom";
import "../styles/projectCard.css";

const ProjectCard = ({ project }) => {
  const ico = project.icon;
  
  // Get platform badge text based on platform
  const getPlatformBadge = () => {
    const platform = project.platform;
    if (platform.includes('Website') && platform.includes('Android')) {
      return '🌐 + 📱';
    } else if (platform.includes('Android') && platform.includes('IoT')) {
      return '📱 + 🔧';
    } else if (platform.includes('Android')) {
      return '📱';
    } else if (platform.includes('Website')) {
      return '🌐';
    } else if (platform.includes('IoT')) {
      return '🔧';
    } else {
      return '💻';
    }
  };

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
          <div className="platform-badge">
            {getPlatformBadge()}
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
