import React from "react";

import "../assets/css/styleStaffInfo.css";

import InfoNav from "../components/StaffInfo/InfoNav";
import InfoSideBar from "../components/StaffInfo/InfoSideBar";
import UserProfile from "../components/StaffInfo/UserProfile";
function StaffInfo() {
  return (
    <>
      <div className="container-fluid">
        {/* <Navbar/> */}
        <div className="row">
          <div className="col-md-2">
            <InfoSideBar />
          </div>
          <div
            className="col-md-10"
            style={{ backgroundColor: "#F5F5F5", height: "100vh" }}
          >
            <InfoNav />
            <UserProfile />
          </div>
        </div>
      </div>
    </>
  )
}
export default StaffInfo;
