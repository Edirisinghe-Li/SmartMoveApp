import React from 'react';
import './MainMap.css';

const MainMap = () => {
  return (
    <div className='main-map-container'>
        <div className='image-container'>
            <img src={require('./image/map.jpg')} className='main-map-image'/>
        </div>
        <div className='content-container'>
            <h4>Live Bus Track</h4>
            <p>Search your nearest transport here</p>
        </div>
    </div>
  )
}

export default MainMap
