import React from 'react';
import SideBar from '../Component/LoginRegister/SideBar';
import './dashboard.css';
import BusTrack from '../Component/LoginRegister/BusTrack';
import MapTrack from '../Component/LoginRegister/MapTrack';
import BusCount from '../Component/LoginRegister/BusCount';
import Alert from '../Component/LoginRegister/Alert';
import Ai from '../Component/LoginRegister/Ai';


const Dashboard = () => {
  return (
    <div className='container-dashboard'>
      <SideBar/>
      <div className='sub-container'>
        <div className='element-container'>
            <BusTrack/>
            <Alert/>
            
        </div>
        <div className='element-container'>
            <BusCount/>
        </div>
        </div>
        <div className='right-container'>
            <Ai/>
            <MapTrack/>
            
         </div>
      
    </div>
  );
};

export default Dashboard;