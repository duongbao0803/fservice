import React, { useContext, useEffect } from "react";

import "../assets/css/styleStaffCommon.css";

import Navbar from "../components/StaffPage/Navbar";
import Sidebar from "../components/StaffPage/Sidebar";
import { ToastContainer } from "react-toastify";

function StaffLayout({ children }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-2"
            style={{ backgroundColor: "white", padding: 0 }}
          >
            <Sidebar />
          </div>
          <div
            className="col-md-10"
            style={{ backgroundColor: "#F5F5F5", height: "100vh" }}
          >
            <Navbar />

            {children}
          </div>
        </div>
      </div>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        style={{
          top: "3em",
        }}
      />
    </>
  );
}
export default StaffLayout;
