import React from 'react';
import introImg from "../assets/prof.png";
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
            <h3>Front-End Developer</h3>
        </div>
        
    </div>
  );
}

export default Intro;


