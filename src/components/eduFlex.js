import React from "react";

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
      </div>
    </div>
  );
};

export default eduFlex;
