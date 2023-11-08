import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Session } from "../App";
import NotFound from "../components/NotFound/NotFound";

const PrivateRoute = (props) => {
  // const { user } = useContext(Session);
  // console.log("check user", user);

  if (
    localStorage.getItem("role") === "ADMIN" &&
    props.allowedRole.includes("ADMIN")
  ) {
    return (
      <>
        <div>{props.children}</div>;
      </>
    );
  }

  if (
    localStorage.getItem("role") === "USER" &&
    props.allowedRole.includes("USER")
  ) {
    return (
      <>
        <div>{props.children}</div>;
      </>
    );
  }

  if (
    localStorage.getItem("role") === "STAFF" &&
    props.allowedRole.includes("STAFF")
  ) {
    return (
      <>
        <div>{props.children}</div>
      </>
    );
  }

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PrivateRoute;
