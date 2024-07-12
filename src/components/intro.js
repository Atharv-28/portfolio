import React from 'react';
import introImg from "../assets/prof.png";
import "../styles/intro.css"

const Intro = () => {
  return (
    <div id='intro' className='intro'>
        <div>
            <p>Hi,</p>
            <h2>I'm Atharv Tambekar</h2>
            <h3>Front-End Developer</h3>
        </div>
        <div>
            <img src={introImg} />
        </div>
    </div>
  );
}

export default Intro;


