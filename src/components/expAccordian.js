import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExperienceList from "../utils/experienceList";
import "../styles/expAccordian.css";

const ExpAccordian = () => {
  return (
    <div className="exp-accordian-container">
      {ExperienceList.map((experience) => (
        <div key={experience.id} className="exp-accordian-effect">
          <Accordion className="exp-accordian">
            <AccordionSummary>
              <div className="exp-heading-container">
                <div className="exp-head-left">
                  <div className="exp-logo">
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="exp-logo"
                    />
                  </div>
                  <div>
                    <h3>{experience.company}</h3>
                    <p className="post-color">{experience.position}</p>
                  </div>
                </div>
                <div>
                  <p>{experience.duration}</p>
                </div>
              </div>
            </AccordionSummary>
            <hr />
            <AccordionDetails className="exp-details">
              <ul>
                {experience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              {experience.certificateLink && (
                <a
                  className="about-me-button"
                  href={experience.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {experience.certificateText}
                </a>
              )}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default ExpAccordian;
