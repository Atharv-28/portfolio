import "./App.css";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Career from "./components/career";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Intro />
        <AboutMe />
        <Career />
      </div>
    </div>
  );
}

export default App;
