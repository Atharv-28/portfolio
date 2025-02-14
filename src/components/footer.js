import React from "react";
import "../styles/footer.css";
import Contact from "./contact";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <div className="footer-container">
        <Contact />
        <p className="footer-text">
          © 2024-25 ATHARV MAYUR TAMBEKAR. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
