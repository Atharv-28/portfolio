import Career from "../components/career";
import Intro from "../components/intro";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import Achievements from "../components/achievements";
import "../App.css";

const HomePage = () => {
  return (
    <div className="home">
      <Intro />
      <AboutMe />
      <Career />
      <Skills />
      <Achievements />
    </div>
  );
};

export default HomePage;
