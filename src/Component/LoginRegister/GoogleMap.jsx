import React from 'react';
import './GoogleMap.css';

const GoogleMap = () => {
  return (
    <div className='google-map-container'>
      <img src={require('./image/map.jpg')} className='main-map-image'/>
    </div>
  )
}

export default GoogleMap
