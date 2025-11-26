import introImg from "./prof.png";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import RotatingText from "./RotatingText";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";

import "../styles/intro.css";

const Intro = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div id="intro" className="intro-section">
      <div className="intro-container">
        <div className="intro-content">
          <div className="intro-text">
            <div className="greeting">
              <SplitText
                text="Hello,"
                className="greeting-text"
                delay={150}
                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
            
            <div className="name-container">
              <BlurText
                className="name-text"
                text="I'm Atharv Tambekar"
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </div>

            <div className="role-container">
              <div className="div-rotating-text">
                <RotatingText
                  texts={[
                    "MERN Stack Developer",
                    "React Native Developer",
                    "Computer Science Engineer",
                    "Full Stack Developer",
                  ]}
                  mainClassName="rotating-text-main"
                  staggerFrom={"last"}
                  initial={{ y: "400%" }}
                  animate={{ y: 0 }}
                  className="skill-text"
                  exit={{ y: "-400%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={5000}
                />
              </div>
            </div>

            <p className="intro-description">
              Crafting exceptional digital experiences through elegant code.
              Specialized in building scalable web and mobile applications that
              make a difference.
            </p>

            <div className="intro-actions">
              <a href="#contact" className="cta-button primary">
                Get In Touch
                <ArrowForwardIcon className="button-icon" />
              </a>
              <a href="#projects" className="cta-button secondary">
                <CodeIcon className="button-icon" />
                View Projects
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://linkedin.com/in/atharv-tambekar"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="social-icon" />
              </a>
              <a
                href="https://github.com/Atharv-28"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <GitHubIcon className="social-icon" />
              </a>
              <a
                href="mailto:atharvtambekar28@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <EmailIcon className="social-icon" />
              </a>
            </div>
          </div>

          <div className="intro-image-container">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <img className="intro-image" src={introImg} alt="Atharv Tambekar" />
              <div className="floating-badge badge-1">
                <CodeIcon className="badge-icon1" />
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
