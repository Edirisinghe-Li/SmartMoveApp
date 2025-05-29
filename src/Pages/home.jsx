import React, { useState, useEffect } from 'react';
import './home.css';
import Hero from '../Component/LoginRegister/Hero';
import SearchCompt from '../Component/LoginRegister/SearchCompt';
import MainMap from '../Component/LoginRegister/MainMap';
import SimpleBottomNavigation from '../Component/LoginRegister/SimpleBottomNavigation';
import CustomizedTables from '../Component/LoginRegister/CustomizedTables';
import AlertCard from '../Component/LoginRegister/AlertCard';


const Home = () => {

  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('https://localhost:7108/api/test')
      .then(res => res.text())
      .then(data => setBackendMessage(data))
      .catch(err => {
        console.error("Backend call failed", err);
        setBackendMessage("Could not connect to backend.");
      });
  }, []);

  return (
    <div className='main-container'>
      <Hero/>
      <div className='main-search-container'>
        <SearchCompt/>
      </div>
      <div className='main-element-container'>
        <div className='left-main-element-container'>
          <h4>Arrival Time</h4>
          <CustomizedTables/>
        </div>
        <div className='middle-main-element-container'>
          <MainMap/>
        </div>
        <div className='right-main-element-container'>
          <AlertCard/>
        </div>
      </div>
      <div className='backend-message-container' style={{ margin: '20px', padding: '10px', background: '#eef', borderRadius: '8px' }}>
        <h4>Backend Message:</h4>
        <p>{backendMessage}</p>
      </div>
      <SimpleBottomNavigation/>
    </div>
  );
};

export default Home;