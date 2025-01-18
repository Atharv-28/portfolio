import React, { useState } from "react";
import "../styles/career.css";
import ProjectsFlex from "./projectFlex";
import EduFlex from "./eduFlex";
import ExpAccordian from "./expAccordian";

const Career = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="career" className="tabs-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => handleTabClick("education")}
        >
          Education
        </button>
        <button
          className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </button>
        <button
          className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "education" && (
          <div className="edu">
            <h2>Education</h2>
            <EduFlex className="edu-flex" />
          </div>
        )}
        {activeTab === "projects" && (
          <div className="edu">
            <h2>Projects</h2>
            <ProjectsFlex className="project-flex" />
          </div>
        )}
        {activeTab === "experience" && (
          <div className="edu">
            <h2>Experience</h2>
            <ExpAccordian />
          </div>
        )}
      </div>
    </div>
  );
};
export default Career;
