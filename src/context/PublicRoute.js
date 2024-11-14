import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

import HomeSk from "../components/shimmrui/HomeSk";

const PublicRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <HomeSk />;
  }

  return user ? <Navigate to="/browse" /> : <Outlet />;
};

export default PublicRoute;
