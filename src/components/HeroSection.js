import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './CardItem';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      {/* I got this free video on Coverr.co https://coverr.co/videos/taking-vitamins-YgRlgEBe7r?utm_source=coverr&utm_medium=referral&utm_content=creditShareLink */}
      <h1>Medication</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <a href="kard">a</a>
        <Button 
          href="myDropdown"
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Stop Forgetting
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
