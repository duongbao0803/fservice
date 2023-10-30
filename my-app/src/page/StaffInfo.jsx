import React from "react";

import "../css/styleStaffInfo.css";

import InfoNav from "../components/StaffInfo/InfoNav";
import InfoSideBar from "../components/StaffInfo/InfoSideBar";
import UserProfile from "../components/StaffInfo/UserProfile";
function StaffInfo() {
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5", height: "800px" }}>
        <InfoNav />
        <InfoSideBar />
        <UserProfile />
      </div>
    </>
  );
}
export default StaffInfo;
