import React from 'react';
import introImg from "./prof.png";
import "../styles/intro.css"

const Intro = () => {
  return (
    <div id='intro' className='intro'>
        <div className='intro-image'>
            <img className='img-prof' src={introImg} />
        </div>
        <div  className='intro-text'>
            <p>Hi,</p>
            <h2>I'm Atharv Tambekar</h2>
            <h3>M-E-R-N Stack Developer | Mobile App Developer (React-Native)</h3>
        </div>
    </div>
  );
}

export default Intro;


