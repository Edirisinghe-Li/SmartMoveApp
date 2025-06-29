import React, { createContext, useState, useEffect, useContext } from "react";

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap the app and provide auth state
export const AuthProvider = ({ children }) => {
  // Initialize user state from localStorage, or null if not found
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  // Listen for localStorage changes (e.g., in other tabs) to sync user state
  useEffect(() => {
    const handleStorage = () => {
      const updated = localStorage.getItem("user");
      setUser(updated ? JSON.parse(updated) : null);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context easily in components
export const useAuth = () => {
  return useContext(AuthContext);
};
