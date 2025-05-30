import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../Component/LoginRegister/SideBar';
import './dashboard.css';
import Ai from '../Component/LoginRegister/Ai';
import ActiveBus from '../Component/LoginRegister/ActiveBus';
import DelayBus from '../Component/LoginRegister/DelayBus';
import BrokenBus from '../Component/LoginRegister/BrokenBus';
import GoogleMap from '../Component/LoginRegister/GoogleMap';

const Dashboard = () => {
  const location = useLocation();
  const isBaseDashboard = location.pathname === '/dashboard';

  return (
    <div className="container-dashboard">
      <SideBar />

      <div className="main-content">
        {isBaseDashboard ? (
          <>
            <div className="left-section">
              <div className="element-container">
              <Ai/>
              </div>
              <div className="element-container">
                <ActiveBus/>
                <DelayBus/>
                <BrokenBus/>
              </div>
            </div>

            <div className="right-section">
              <GoogleMap/>
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
