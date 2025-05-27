import React from 'react';
import './home.css';
import Hero from '../Component/LoginRegister/Hero';
import SearchCompt from '../Component/LoginRegister/SearchCompt';
import MainMap from '../Component/LoginRegister/MainMap';
import SimpleBottomNavigation from '../Component/LoginRegister/SimpleBottomNavigation';
import CustomizedTables from '../Component/LoginRegister/CustomizedTables';
import AlertCard from '../Component/LoginRegister/AlertCard';


const Home = () => {
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
      <SimpleBottomNavigation/>
    </div>
  );
};

export default Home;