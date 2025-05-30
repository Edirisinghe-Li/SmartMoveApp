import React from 'react'
import './AdminProfile.css';
import ActiveBus from '../Component/LoginRegister/ActiveBus';
import BrokenBus from '../Component/LoginRegister/BrokenBus';
import DelayBus from '../Component/LoginRegister/DelayBus';
import CustomizedTables from '../Component/LoginRegister/CustomizedTables';
import GoogleMap from '../Component/LoginRegister/GoogleMap';
import Ai from '../Component/LoginRegister/Ai';
import BusCount from '../Component/LoginRegister/BusCount';
import BusTrack from '../Component/LoginRegister/BusTrack';
import Alert from '../Component/LoginRegister/Alert';


const AdminProfile = () => {
  return (
    <div className='main-admin-content'>
      <div className='left-admin-section'>
        <ActiveBus/>
        <BrokenBus/>
        <DelayBus/>
      </div>
      <div className='element-admin-container'>
        <div className='middle-admin-container'>
          <BusCount/>
          <BusTrack/>
        </div>
        <Ai/>
        <Alert/>
        <CustomizedTables/>
        <GoogleMap/>
      </div>
    </div>
  )
}

export default AdminProfile
