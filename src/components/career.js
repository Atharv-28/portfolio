import React, { useState } from 'react';
import '../styles/career.css'; 
import ProjectsFlex from './projectFlex';

const Career = () => {
    const [activeTab, setActiveTab] = useState('education');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
  
    return (
      <div id='career' className="tabs-container">
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => handleTabClick('education')}
          >
            Education
          </button>
          <button
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => handleTabClick('projects')}
          >
            Projects
          </button>
        </div>
  
        <div className="tab-content">
          {activeTab === 'education' && (
            <div className='edu'>
              <h2>Education</h2>
              <div className='degree'>
                <h3>Sanjay Ghodawat Polytechnic</h3>
                <h4>Diploma in Computer Science & Engineering</h4>
                <p>2021-2024</p>
              </div>
              <div className='degree'>
                <h3>Sanjay Ghodawat Institute</h3>
                <h4>B.Tech in Computer Science & Engineering</h4>
                <p>2024-Present</p>
              </div>
            </div>
          )}
          {activeTab === 'projects' && (
            <div className='edu'>
              <h2>Projects</h2>
                <ProjectsFlex />
            </div>
          )}
        </div>
      </div>
    );
  };
export default Career;
