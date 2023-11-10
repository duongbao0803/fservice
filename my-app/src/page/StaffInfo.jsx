import React from "react";
import "../assets/css/styleStaffCommon.css";
import "../assets/css/styleStaffInfo.css";
import StaffProfile from "../components/StaffInfo/StaffProfile";
import Sidebar from "../components/StaffPage/Sidebar";
import Navbar from "../components/StaffPage/Navbar";
import { ToastContainer } from "react-toastify";
function StaffInfo() {
  return (
    <>
      <div className="container-fluid">
        {/* <Navbar/> */}
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
            <StaffProfile />
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
export default StaffInfo;
