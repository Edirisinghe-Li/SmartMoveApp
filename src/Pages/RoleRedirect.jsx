import React from "react";
import { Navigate } from "react-router-dom";

const RoleRedirect = () => {
  const role = localStorage.getItem("role");

  if (role === "Admin") {
    return <Navigate to="admin-profile" replace />;
  } else if (role === "User") {
    return <Navigate to="user-profile" replace />;
  } else {
    return <Navigate to="/unauthorized" replace />;
  }
};

export default RoleRedirect;
