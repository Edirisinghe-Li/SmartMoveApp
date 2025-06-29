import React from 'react';
import './App.css';
import NavBar from './Component/LoginRegister/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/home';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import UserProfile from './Pages/UserProfile';
import AdminProfile from './Pages/AdminProfile';
import Unauthorized from './Pages/Unauthorized';
import ProtectedRoute from './Component/ProtectedRoute';
import RoleRedirect from './Pages/RoleRedirect';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Dashboard Route with Nested Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["Admin", "User"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Default fallback: redirect to role-based dashboard */}
          <Route index element={<RoleRedirect />} />

          {/* Role-specific profile pages */}
          <Route
            path="user-profile"
            element={
              <ProtectedRoute allowedRoles={["User"]}>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin-profile"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AdminProfile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;




