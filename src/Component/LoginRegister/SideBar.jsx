import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboardCustomize, MdBusAlert, MdAssistant } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './SideBar.css';

const SideBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfileSubmenu = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <div className='sidebar-content'>
      <div className='sidebar-container'>

        {/* Profile with Submenu */}
        <div className='nav-option optional' onClick={toggleProfileSubmenu}>
          <FaUserCircle className='icon' />
          <span className='nav-link'>Profile</span>
          {profileOpen ? <IoIosArrowUp className="arrow-icon" /> : <IoIosArrowDown className="arrow-icon" />}
        </div>
        {profileOpen && (
          <div className='submenu'>
            <Link to="/user-profile" className='submenu-link'>User</Link>
            <Link to="/admin-profile" className='submenu-link'>Admin</Link>
          </div>
        )}

        {/* Other Menu Items */}
        <div className='nav-option optional'>
          <MdDashboardCustomize className='icon' />
          <Link to="/dashboard" className='nav-link'>Dashboard</Link>
        </div>
        <div className='nav-option optional'>
          <FaLocationDot className='icon' />
          <Link to="/tracking" className='nav-link'>Tracking</Link>
        </div>
        <div className='nav-option optional'>
          <MdBusAlert className='icon' />
          <Link to="/alerts" className='nav-link'>Alerts</Link>
        </div>
        <div className='nav-option optional'>
          <MdAssistant className='icon' />
          <Link to="/ai-tools" className='nav-link'>AI Tools</Link>
        </div>
        <div className='nav-option optional'>
          <HiDocumentReport className='icon' />
          <Link to="/reports" className='nav-link'>Reports</Link>
        </div>
        <div className='nav-option optional'>
          <IoSettings className='icon' />
          <Link to="/settings" className='nav-link'>Settings</Link>
        </div>
        <div className='nav-option optional'>
          <IoMdHelpCircle className='icon' />
          <Link to="/help" className='nav-link'>Help</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
