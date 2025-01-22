import React from "react";
import "../styles/aboutme.css";
import TranslateIcon from "@mui/icons-material/Translate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";

const AboutMe = () => {

  const openPdfView = () => {
    window.open("https://drive.google.com/file/d/1RVa44GGdSF_ERz6i0ruUreEA9B7hq2m0/view?usp=sharing", "_blank");
  };
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
              <span className="about-me-text">
                <PersonIcon fontSize="large" style={{ color: "#4070f4" }}></PersonIcon>
                19 years
              </span>
            </div>
            <div className="about-me-detail">
              <span className="about-me-text">
                <TranslateIcon fontSize="large" style={{ color: "#4070f4" }}></TranslateIcon>
                English, Marathi, Hindi
              </span>
            </div>
            <div className="about-me-detail">
              <span className="about-me-text">
                <LocationOnIcon fontSize="large" style={{ color: "#4070f4" }}></LocationOnIcon>
                Kolhapur, Maharashtra, India
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="about-me-button"
        onClick={openPdfView}
      >
        Resume
      </button>
    </div>
  );
};

export default AboutMe;
