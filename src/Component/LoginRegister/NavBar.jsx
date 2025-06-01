import React, { useRef } from "react";
import './NavBar.css';
import { FaBars, FaTimes, FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3><FaBus className="icon" />SmartMove</h3>
            <nav ref={navRef}>
                <Link to="/home" className="nav-links">Home</Link>
                <Link to="/dashboard" className="nav-links">Dashboard</Link>
                <Link to="/#" className="nav-links">Contact</Link>
                <Link to="/login" className="nav-links">Login</Link>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={() => {
                                    if (setting === "Logout") {
                                        localStorage.removeItem("user"); // Clear login info
                                        handleCloseUserMenu();
                                        window.location.href = "/login"; // Redirect to login
                                    } else {
                                        handleCloseUserMenu();
                                        console.log(`${setting} clicked`);
                                        // Optional: You can navigate to routes like /profile here
                                    }
                                }}
                            >
                                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>

            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default NavBar;
