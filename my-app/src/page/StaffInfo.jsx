import React from "react";
import "../assets/css/styleStaffCommon.css";
import "../assets/css/styleStaffInfo.css";
import StaffProfile from "../components/StaffInfo/StaffProfile";
import { Helmet } from "react-helmet";
import StaffLayout from "../Layout/StaffLayout";
function StaffInfo() {
  return (
    <>
      <Helmet>
        <title> FService | Thông tin </title>
      </Helmet>

      <StaffLayout>
        <StaffProfile />
      </StaffLayout>
    </>
  );
}
export default StaffInfo;
