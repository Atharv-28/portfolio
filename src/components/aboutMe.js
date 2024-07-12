import React from "react";
import "../styles/aboutme.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2 className="about-me-title">About me</h2>
      <div className="about-me-content">
        <div className="about-me-left">
          <p className="about-me-subtitle">
            M-E-R-N Stack Developer | Mobile App Developer (React-Native)
          </p>
          <p className="about-me-description">
            Skilled in Web & mobile app development. I feel so comfortable
            working in a team and I have a deep understanding of front-end &
            back-end. My confidence and quick decision-making ability can boost
            the performance of the company. A positive attitude, hard work,
            dedication, and confidence are my greatest strengths.
          </p>
        </div>
        <div className="about-me-right">
          <div className="about-me-details">
            <div className="about-me-detail">
              <span className="about-me-icon">👤</span>
              <span className="about-me-text">18 years</span>
            </div>
            <div className="about-me-detail">
              <span className="about-me-icon">🗣️</span>
              <span className="about-me-text">English, Marathi, Hindi</span>
            </div>
            <div className="about-me-detail">
              <span className="about-me-icon">📍</span>
              <span className="about-me-text">Kolhapur, India</span>
            </div>
          </div>
        </div>
      </div>
      <a className="about-me-button" href="https://1drv.ms/b/s!AkYeXXs8-OXi4CPfzBYeONEQGCIi?e=JkzCqX" target="_blank">Resume</a>
    </div>
  );
};

export default AboutMe;
