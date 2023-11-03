import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    className="not-found d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh", flexDirection: "column" }}
  >
    <h1>404 NOT FOUND</h1>
    <Link to="/">Return to Home</Link>
  </div>
);

export default NotFound;
