import "./App.css";
import Navbar from "./components/navbar";
import Intro from "./components/intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Intro />
      </div>
    </div>
  );
}

export default App;
