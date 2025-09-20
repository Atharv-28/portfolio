import React from "react";
// CSS is in same file of career.js
const eduFlex = () => {
  return (
    <div className="edu-flex">
      <div className="edu-card">
        <img
          className="edu-logo"
          src="/assets/collegeLogos/sgp.jpg"
          alt="Sanjay Ghodawat Polytechnic"
        />
        <div className="degree">
          <h3>Sanjay Ghodawat Polytechnic</h3>
          <h4>Diploma in Computer Science & Engineering</h4>
          <p>2021-2024</p>
        </div>
        <div className="edu-grade-container">
          <p className="edu-grade">AGG :</p>
          <span className="edu-grade">87.66%</span>
        </div>
      </div>
      <div className="edu-card">
        <img
          className="edu-logo"
          src="/assets/collegeLogos/sgi.jpg"
          alt="Sanjay Ghodawat Institute"
        />
        <div className="degree">
          <h3>Sanjay Ghodawat Institute</h3>
          <h4>B.Tech in Computer Science & Engineering</h4>
          <p>2024-Present</p>
        </div>
        <div className="edu-grade-container">
          <p className="edu-grade">
            CGPA :
          </p>
          <span className="edu-grade">7.76</span>
        </div>
      </div>
    </div>
  );
};

export default eduFlex;
