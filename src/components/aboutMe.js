import React from "react";
import "../styles/aboutme.css";
import TranslateIcon from "@mui/icons-material/Translate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <div className="about-me-header">
        <h2 className="about-me-title">About Me</h2>
        <p className="about-me-tagline">
          Passionate Developer | Problem Solver | Lifelong Learner
        </p>
      </div>

      <div className="about-me-container">
        <div className="about-me-main-card">
          <div className="about-me-intro">
            <div className="role-badge">
              <CodeIcon className="badge-icon" />
              <span>Full Stack Developer</span>
            </div>
            <h3 className="about-me-subtitle">
              MERN Stack & React Native Developer
            </h3>
            <p className="about-me-description">
              I'm a passionate full-stack developer specializing in building
              exceptional digital experiences. With expertise in both web and
              mobile app development, I bring ideas to life through clean,
              efficient code. I thrive in collaborative environments and have a
              comprehensive understanding of modern development practices from
              front-end to back-end.
            </p>
            <p className="about-me-description">
              My approach combines technical proficiency with strong
              problem-solving skills, enabling me to deliver robust solutions
              that drive business value. I'm committed to continuous learning
              and staying current with emerging technologies.
            </p>
          </div>

          <div className="about-me-stats">
            <div className="stat-card">
              <CakeIcon className="stat-icon" />
              <div className="stat-content">
                <h4 className="stat-value">19</h4>
                <p className="stat-label">Years Old</p>
              </div>
            </div>
            <div className="stat-card">
              <LocationOnIcon className="stat-icon" />
              <div className="stat-content">
                <h4 className="stat-value">Kolhapur</h4>
                <p className="stat-label">Maharashtra, India</p>
              </div>
            </div>
            <div className="stat-card">
              <TranslateIcon className="stat-icon" />
              <div className="stat-content">
                <h4 className="stat-value">3</h4>
                <p className="stat-label">Languages: EN | MR | HI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-me-actions">
          <a
            className="about-me-button primary"
            href="https://drive.google.com/file/d/1riskiaAmLFIsJKH9xXSfZzJq0fLyXIqh/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon className="button-icon" />
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
