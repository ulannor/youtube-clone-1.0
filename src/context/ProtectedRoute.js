import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth status
  }

  console.log("Current user:", user);
  return user ? children : <Navigate to="/logintest" />;
};

export default ProtectedRoute;
