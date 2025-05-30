import React from 'react'
import SideBar from '../Component/LoginRegister/SideBar';
import './UserProfile.css';
import MapTrack from '../Component/LoginRegister/MapTrack';
import BusCount from '../Component/LoginRegister/BusCount';
import Alert from '../Component/LoginRegister/Alert';
import Ai from '../Component/LoginRegister/Ai';
import ActiveBus from '../Component/LoginRegister/ActiveBus';

const UserProfile = () => {
  return (
    <div>
      <div className='container-dashboard'>
      <SideBar/>
      <div className='sub-container'>
        <div className='element-container'>
            <ActiveBus/>
            <ActiveBus/>
            <ActiveBus/>
            
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
    </div>
  )
}

export default UserProfile
