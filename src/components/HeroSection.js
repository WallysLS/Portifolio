import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-6.mp4' autoPlay loop muted />
      <h1>Wallys Lucas de Souza</h1>
      <p>Full Stack Developer</p>
      
    </div>
  );
}

export default HeroSection;
