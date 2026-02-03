import React from "react";
import "../styles/footer.css";
import Contact from "./contact";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <Contact />
        <p className="footer-text">
          © 2024-26 ATHARV MAYUR TAMBEKAR. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
