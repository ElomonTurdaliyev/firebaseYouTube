import React from 'react';
import Main from './main/Main';
import { useState } from 'react';
import './about.css'

const About = () => {

  const [darkMode, setDarkMode] = useState('');
  const darckFuncsion = () => {
    darkMode === '' ? setDarkMode('darkMode') : setDarkMode('');
  }

  return (
    <div className="container">
      <div className={`position-relative ${darkMode}`}>
        <div className='about-div'>
          <div className='dMode' onClick={darckFuncsion}>
            <div className='dMode1'></div>
            <div className='dMode2'></div>
          </div>
        </div>
        <Main/>
      </div>
    </div>
  );
}

export default About