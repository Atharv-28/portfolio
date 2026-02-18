import React from "react";
// import techStack from "../utils/techStack";
import LogoLoop from "./logoloop";
import "../styles/skills.css";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiJquery, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiFirebase, 
  SiMongodb, 
  SiMysql, 
  SiC, 
  SiCplusplus, 
  SiPython 
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";



const techLogos = [
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiJquery />, title: "jQuery", href: "https://jquery.com" },
  { node: <SiReact />, title: "ReactJS", href: "https://react.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express JS", href: "https://expressjs.com" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiReact />, title: "React-Native", href: "https://reactnative.dev" },
  { node: <SiMysql />, title: "SQL", href: "https://www.mysql.com" },
  { node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
  { node: <FaJava />, title: "JAVA", href: "https://www.java.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
];


const Skills = () => {
  return (
    <div id="skills" className="tech-stack-container">
      <h2>Skills</h2>
      <div className="tech-stack-marquee">
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
