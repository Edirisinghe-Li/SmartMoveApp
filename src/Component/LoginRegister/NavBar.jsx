import React, { useRef, useEffect, useState } from "react";
import "./NavBar.css";
import { FaBars, FaTimes, FaBus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const navRef = useRef();
  const navigate = useNavigate();

  // Load user info on mount and when localStorage changes in other tabs
  useEffect(() => {
    const loadUserFromStorage = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          setUsername(user.username || "");
          setRole(user.role || "");
        } catch (error) {
          console.error("Error parsing user from localStorage:", error);
          setUsername("");
          setRole("");
        }
      } else {
        setUsername("");
        setRole("");
      }
    };

    loadUserFromStorage();

    // Listen for changes to localStorage (login/logout from other tabs)
    window.addEventListener("storage", loadUserFromStorage);

    // Cleanup listener on unmount
    return () => window.removeEventListener("storage", loadUserFromStorage);
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    handleCloseUserMenu();
    navigate("/login");
    // Reload after navigation and menu close
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <header>
      <h3>
        <FaBus className="icon" />
        SmartMove
      </h3>

      <nav ref={navRef}>
        <Link to="/home" className="nav-links">Home</Link>
        <Link to="/dashboard" className="nav-links">Dashboard</Link>
        <Link to="/#" className="nav-links">Contact</Link>

        {!username && <Link to="/login" className="nav-links">Login</Link>}

        {username && (
          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Tooltip title="User Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={username.toUpperCase()}>
                  {username.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem disabled>
                <Typography textAlign="center">
                  Logged in as: <strong>{username}</strong>
                </Typography>
              </MenuItem>
              <MenuItem disabled>
                <Typography textAlign="center">
                  Role: <strong>{role}</strong>
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  const path = role === "Admin" ? "admin-profile" : "user-profile";
                  navigate(`/dashboard/${path}`);
                  handleCloseUserMenu();
                }}
              >
                <Typography textAlign="center">My Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        )}

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

