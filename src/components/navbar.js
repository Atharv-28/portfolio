import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <h1 className="navbar-title" onClick={() => navigate("/")}>
          Atharv Tambekar
        </h1>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="hamburger"></div>
          <div className="ham-child"></div>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => handleNavigation("about-me")}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleNavigation("career")}>
              Career
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleNavigation("contact")}>
              Achievements
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleNavigation("skills")}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleNavigation("contact")}>
              Contact Info
            </Link>
          </li>
        </ul>
        <a
          className="nav-but"
          href="https://drive.google.com/file/d/1g1LPZBTbBQlSDLsZTPCLMHkMCHJxUXmH/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
