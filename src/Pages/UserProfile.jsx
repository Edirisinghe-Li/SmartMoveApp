import React from 'react'
import './UserProfile.css';
import ActiveBus from '../Component/LoginRegister/ActiveBus';
import BrokenBus from '../Component/LoginRegister/BrokenBus';
import DelayBus from '../Component/LoginRegister/DelayBus';
import CustomizedTables from '../Component/LoginRegister/CustomizedTables';
import GoogleMap from '../Component/LoginRegister/GoogleMap';
import Ai from '../Component/LoginRegister/Ai';

const UserProfile = () => {
  return (
    <div className='main-user-content'>
      <div className='left-user-section'>
        <ActiveBus/>
        <BrokenBus/>
        <DelayBus/>
      </div>
      <div className='element-user-container'>
        <Ai/>
        <CustomizedTables/>
        <GoogleMap/>
      </div>
    </div>
  )
}

export default UserProfile;
