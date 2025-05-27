import React from "react";
import {useRef} from "react";
import './NavBar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBus } from "react-icons/fa";



const NavBar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3><FaBus className="icon"/>SmartMove</h3>
            <nav ref={navRef}>
                <Link to ="/home" className="nav-links">Home</Link>
                <Link to ="/dashboard" className="nav-links">Dashboard</Link>
                <Link to ="/#" className="nav-links">Contact</Link>
                <Link to ="/login" className="nav-links">Login</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default NavBar;