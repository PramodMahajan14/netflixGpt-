// PublicRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loader from "../components/Loader";
import HomeSk from "../components/Skeleton/HomeSk";

const PublicRoute = () => {
  const { user, loading } = useAuth();
  console.log(user);

  if (loading) {
    return <HomeSk />;
  }

  return user ? <Navigate to="/browse" /> : <Outlet />;
};

export default PublicRoute;
