import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboardCustomize, MdBusAlert, MdAssistant } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import './SideBar.css';


const SideBar = () => {
  return (
    <div className='sidebar-content'>
        <div className='sidebar-container'>
            <div className='nav-option optional'>
                <FaUserCircle className='icon'/>
                <Link to="/#" className='nav-link'>Profile</Link>
            </div>
            <div className='nav-option optional'>
                <MdDashboardCustomize className='icon'/>
                <Link to="/#" className='nav-link'>DashBoard</Link>
            </div>
            <div className='nav-option optional'>
                <FaLocationDot className='icon'/>
                <Link to="/#" className='nav-link'>Tracking</Link>
            </div>
            <div className='nav-option optional'>
                <MdBusAlert className='icon'/>
                <Link to="/#" className='nav-link'>Alerts</Link>
            </div>
            <div className='nav-option optional'>
                <MdAssistant className='icon'/>
                <Link to="/#" className='nav-link'>AI Tools</Link>
            </div>
            <div className='nav-option optional'>
                <HiDocumentReport className='icon'/>
                <Link to="/#" className='nav-link'>Reports</Link>
            </div>
            <div className='nav-option optional'>
                <IoSettings className='icon'/>
                <Link to="/#" className='nav-link'>Settings</Link>
            </div>
            <div className='nav-option optional'>
                <IoMdHelpCircle className='icon'/>
                <Link to="/#" className='nav-link'>Help</Link>
            </div>
        </div>
    </div>
  );
};

export default SideBar;