import React, { useContext, useEffect } from "react";

import "../assets/css/styleStaffCommon.css";

import Navbar from "../components/StaffPage/Navbar";
import Sidebar from "../components/StaffPage/Sidebar";
import { ToastContainer } from "react-toastify";

function StaffLayout({ children }) {
  return (
    <>
      <div>
        <div className="staff-layout">
          <div
            style={{
              backgroundColor: "white",
              padding: 0,
              flex: 1,
            }}
          >
            <Sidebar />
          </div>
          <div style={{ backgroundColor: "#F5F5F5", height: "100vh", flex: 6 }}>
            <Navbar />
            <div style={{ overflow: "scroll" }}>{children}</div>
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
