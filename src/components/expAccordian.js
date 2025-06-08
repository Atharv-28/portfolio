import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import "../styles/expAccordian.css";

const ExpAccordian = () => {
  return (
    <div className="exp-accordian-container">
      <div className="exp-accordian-effect">
        <Accordion className="exp-accordian">
          <AccordionSummary>
            <div className="exp-heading-container">
              <div className="exp-head-left">
                <div className="exp-logo">
                  <img
                    src="/assets/companyLogos/nullclass.png"
                    alt="NULLCLASS"
                    className="exp-logo"
                  />
                </div>
                <div>
                  <h3>NULLCLASS</h3>
                  <p className="post-color">Web-developer Intern</p>
                </div>
              </div>
              <div>
                <p>Dec 2024 - Jan 2025</p>
              </div>
            </div>
          </AccordionSummary>
          <hr />
          <AccordionDetails className="exp-details">
            <ul>
              <li>
                Developed Full Stack website using M-E-R-N Stack Technologies.
              </li>
              <li>
                Designed, implemented, and optimized 3 distinct features for
                project, enhancing functionality and user experience ensuring
                efficient backend integration with robust frontend designs.
              </li>
              <li>
                Conducted testing and debugging to ensure high-quality code and
                seamless user interaction.
              </li>
              <li>
                Gained hands-on experience with RESTful APIs, database
                management, and deployment strategies.
              </li>
            </ul>
            <a
              className="about-me-button"
              href="https://drive.google.com/file/d/1Fgnidv8rp1HgyrWshoXaKrC00OCU-jNc/view?usp=sharing"
              target="_blank"
            >
              Experience Certificate | Letter of Recommendation
            </a>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ExpAccordian;
