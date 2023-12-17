import React, { useContext, useEffect } from "react";
import "../assets/css/styleStaffWork.css";
import WorkDetail from "../components/StaffPage/WorkDetail";
import StaffLayout from "../Layout/StaffLayout";
import { Helmet } from "react-helmet";

function Staff() {
  return (
    <>
      <Helmet>
        <title> FService | Lịch làm việc </title>
      </Helmet>

      <StaffLayout>
        <WorkDetail />
      </StaffLayout>
    </>
  );
}
export default Staff;
