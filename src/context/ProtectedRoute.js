import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

import HomeSk from "../components/shimmrui/HomeSk";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <HomeSk />;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
