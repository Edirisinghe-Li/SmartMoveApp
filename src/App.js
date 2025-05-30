import React from 'react';
import './App.css';
import NavBar from './Component/LoginRegister/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/home';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import UserProfile from './Pages/UserProfile';
import AdminProfile from './Pages/AdminProfile';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard with nested profile routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="admin-profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
