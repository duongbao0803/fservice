import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Session } from "../App";
import NotFound from "../components/NotFound/NotFound";
import HomePage from "../page/HomePage";

const PrivateRoute = (props) => {
  //   if (
  //     localStorage.getItem("role") === "ADMIN" &&
  //     props.allowedRole.includes("ADMIN")
  //   ) {
  //     return (
  //       <>
  //         <div>{props.children}</div>;
  //       </>
  //     );
  //   }

  //   if (
  //     localStorage.getItem("role") === "USER" &&
  //     props.allowedRole.includes("USER")
  //   ) {
  //     return (
  //       <>
  //         <div>{props.children}</div>;
  //       </>
  //     );
  //   }

  //   if (
  //     localStorage.getItem("role") === "STAFF" &&
  //     props.allowedRole.includes("STAFF")
  //   ) {
  //     return (
  //       <>
  //         <div>{props.children}</div>
  //       </>
  //     );
  //   }

  //   return (
  //     <Routes>
  //       <Route path="*" element={<HomePage />} />
  //     </Routes>
  //   );

  const userRole = localStorage.getItem("role");

  if (userRole && props.allowedRole.includes(userRole)) {
    return <>{props.children}</>;
  }

  return <Navigate to="*" />;
};

export default PrivateRoute;
