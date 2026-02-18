import React from "react";
import LogoLoop from "./logoloop";
import "../styles/skills.css";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiJquery, 
  SiReact, 
  SiExpo,
  SiNodedotjs, 
  SiExpress, 
  SiFirebase, 
  SiMongodb, 
  SiMysql, 
  SiC, 
  SiCplusplus, 
  SiPython,
  SiDocker 
} from 'react-icons/si';
import { FaJava, FaAndroid } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";



const techLogos = [
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiJquery />, title: "jQuery", href: "https://jquery.com" },
  { node: <SiReact />, title: "ReactJS", href: "https://react.dev" },
  { node: <SiExpo />, title: "Expo", href: "https://expo.dev" },
  { node: <FaAndroid />, title: "Android", href: "https://developer.android.com" },
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
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <VscAzure />, title: "Azure", href: "https://azure.microsoft.com" },
];


const Skills = () => {
  return (
    <div id="skills" className="tech-stack-container">
      <h2>Skills</h2>
      <div className="tech-stack-marquee">
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={80}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
      </div>
    </div>
  );
};

export default Skills;
