import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Session } from "../App";
import NotFound from "../components/NotFound/NotFound";
import HomePage from "../page/HomePage";

const PrivateRoute = (props) => {
  const userRole = localStorage.getItem("role");

  if (userRole && props.allowedRole.includes(userRole)) {
    return <>{props.children}</>;
  }

  return <Navigate to="*" />;
};

export default PrivateRoute;
