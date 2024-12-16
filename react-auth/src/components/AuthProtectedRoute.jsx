import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AuthProtectedRoute = (props) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return user ? props.children : <Navigate to="/login" />;
};

export default AuthProtectedRoute;
