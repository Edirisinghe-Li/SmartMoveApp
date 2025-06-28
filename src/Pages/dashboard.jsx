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

  // Check if current path is exactly "/dashboard" or "/dashboard/" to show main widgets
  const isMainDashboard = location.pathname === "/dashboard" || location.pathname === "/dashboard/";

  return (
    <div className="container-dashboard">
      {/* Sidebar component (static across dashboard and nested pages) */}
      <SideBar />

      <div className="main-content">
        {isMainDashboard ? (
          // Show dashboard widgets only on the main dashboard route
          <>
            <div className="left-section">
              <div className="element-container">
                <Ai />
              </div>
              <div className="element-container status-widgets">
                <ActiveBus />
                <DelayBus />
                <BrokenBus />
              </div>
            </div>

            <div className="right-section">
              <GoogleMap />
            </div>
          </>
        ) : (
          // Show nested route content for routes like /dashboard/admin-profile or /dashboard/user-profile
          <div className="nested-route-content">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;



