import Career from "../components/career";
import Intro from "../components/intro";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import Achievements from "../components/achievements";
import Projects from "../components/projects";
import "../App.css";

const HomePage = () => {
  return (
    <div className="home">
      <Intro />
      <AboutMe />
      <Career />
      <Projects />
      <Skills />
      <Achievements />
    </div>
  );
};

export default HomePage;
