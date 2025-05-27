import React from 'react';
import './MapTrack.css';


const MapTrack = () => {
  return (
    <div className='map-container'>
        <h4>Live Bus Tracking</h4>
        <img src={require('./image/map.jpg')} className='map-image'/>
    </div>
  )
}

export default MapTrack
