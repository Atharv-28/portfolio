import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/Atharv-28"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/atharv-tambekar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="social-icon" />
      </a>
      <a href="mailto:atharvtambekar28@gmail.com">
        <FaEnvelope className="social-icon" />
      </a>
    </div>
  );
};

export default Contact;
