import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id='contact' className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://github.com/Atharv-28" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/atharv-tambekar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="mailto:atharvtambekar28@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
        <p className="footer-text">© 2024-25 ATHARV MAYUR TAMBEKAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
