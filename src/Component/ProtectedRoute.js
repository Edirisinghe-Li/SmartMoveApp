import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute component enforces authentication and role-based access.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Components to render if authorized
 * @param {string[]} [props.allowedRoles] - Array of roles allowed to access this route
 * @returns {JSX.Element} - Rendered children if authorized, or redirect component
 */
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  // Get JWT token and user role from localStorage
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If no token, user is not logged in, redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If allowedRoles is specified and user's role is NOT included, redirect to unauthorized page
  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // User is authorized, render child components
  return <>{children}</>;
};

export default ProtectedRoute;


