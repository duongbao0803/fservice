import React from "react";

import "../assets/css/styleStaffWork.css";

import Navbar from "../components/StaffPage/Navbar";
import Sidebar from "../components/StaffPage/Sidebar";
import WorkTable from "../components/StaffPage/WorkTable";
function Staff() {
  return (
    <>
      <div className="container-fluid">
        {/* <Navbar/> */}
        <div className="row">
          <div className="col-md-2" style={{ backgroundColor: "white", padding: 0}}>
            <Sidebar />
          </div>
          <div
            className="col-md-10"
            style={{ backgroundColor: "#F5F5F5", height: "100vh" }}
          >
            <Navbar />
            <WorkTable />
          </div>
        </div>
      </div>
    </>
  )
}
export default Staff;
