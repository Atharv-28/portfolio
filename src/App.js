import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import ProjectDetails from "./page/projectDetails";
import HomePage from "./page/homePage";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project-details/:projectName" element={<ProjectDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
