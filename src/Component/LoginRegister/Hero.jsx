import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={require('./image/2.jpg')} className='hero-image'/>
    </div>
  )
}

export default Hero
