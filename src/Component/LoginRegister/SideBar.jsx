import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdDashboardCustomize, MdBusAlert, MdAssistant } from "react-icons/md";
import { FaUserCircle, FaLocationArrow } from "react-icons/fa"; // Replaced FaLocationDot with FaLocationArrow for compatibility
import { HiDocumentReport } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import './SideBar.css';

const SideBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole.trim().toLowerCase());
    }
  }, []);

  const toggleProfileSubmenu = () => {
    setProfileOpen(prev => !prev);
  };

  return (
    <div className="sidebar-content">
      <div className="sidebar-container">

        {/* Profile Dropdown */}
        <div className="nav-option optional" onClick={toggleProfileSubmenu} role="button" tabIndex={0} onKeyPress={toggleProfileSubmenu}>
          <FaUserCircle className="icon" />
          <span className="nav-link">Profile</span>
          {profileOpen ? <IoIosArrowUp className="arrow-icon" /> : <IoIosArrowDown className="arrow-icon" />}
        </div>

        {profileOpen && (
          <div className="submenu">
            {role === "admin" && (
              <Link to="/dashboard/admin-profile" className="submenu-link">Admin</Link>
            )}
            {role === "user" && (
              <Link to="/dashboard/user-profile" className="submenu-link">User</Link>
            )}
          </div>
        )}

        {/* Common Navigation Items */}
        <Link to="/dashboard" className="nav-option optional">
          <MdDashboardCustomize className="icon" />
          <span className="nav-link">Dashboard</span>
        </Link>

        <Link to="/tracking" className="nav-option optional">
          <FaLocationArrow className="icon" />
          <span className="nav-link">Tracking</span>
        </Link>

        <Link to="/alerts" className="nav-option optional">
          <MdBusAlert className="icon" />
          <span className="nav-link">Alerts</span>
        </Link>

        <Link to="/ai-tools" className="nav-option optional">
          <MdAssistant className="icon" />
          <span className="nav-link">AI Tools</span>
        </Link>

        <Link to="/reports" className="nav-option optional">
          <HiDocumentReport className="icon" />
          <span className="nav-link">Reports</span>
        </Link>

        <Link to="/settings" className="nav-option optional">
          <IoSettings className="icon" />
          <span className="nav-link">Settings</span>
        </Link>

        <Link to="/help" className="nav-option optional">
          <IoMdHelpCircle className="icon" />
          <span className="nav-link">Help</span>
        </Link>

      </div>
    </div>
  );
};

export default SideBar;

