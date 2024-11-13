// PublicRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loader from "../components/Loader";

const PublicRoute = () => {
  const { user, loading } = useAuth();
  console.log(user);

  if (loading) {
    return <Loader />;
  }

  return user ? <Navigate to="/browse" /> : <Outlet />;
};

export default PublicRoute;
