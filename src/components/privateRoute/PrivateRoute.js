import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext.js";
const PrivateRoute = ({ path, ...props }) => {
  const {
    login: { loginStatus },
  } = useAuth();
  return loginStatus ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};

export default PrivateRoute;
