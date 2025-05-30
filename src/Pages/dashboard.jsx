import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../Component/LoginRegister/SideBar';
import './dashboard.css';
import BusTrack from '../Component/LoginRegister/BusTrack';
import MapTrack from '../Component/LoginRegister/MapTrack';
import BusCount from '../Component/LoginRegister/BusCount';
import Alert from '../Component/LoginRegister/Alert';
import Ai from '../Component/LoginRegister/Ai';

const Dashboard = () => {
  const location = useLocation();

  // Show main dashboard widgets only on exact /dashboard
  const isBaseDashboard = location.pathname === '/dashboard';

  return (
    <div className="container-dashboard">
      <SideBar />

      <div className="main-content">
        {isBaseDashboard ? (
          <>
            <div className="sub-container">
              <div className="element-container">
                <BusTrack />
                <Alert />
              </div>
              <div className="element-container">
                <BusCount />
              </div>
            </div>
            <div className="right-container">
              <Ai />
              <MapTrack />
            </div>
          </>
        ) : (
          <div className="nested-route-content">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
