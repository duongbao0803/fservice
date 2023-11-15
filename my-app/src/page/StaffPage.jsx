import React, { useContext, useEffect } from "react";
import "../assets/css/styleStaffWork.css";
import WorkTable from "../components/StaffPage/WorkTable";
import StaffLayout from "../Layout/StaffLayout";
import { Helmet } from "react-helmet";

function Staff() {
  return (
    <>
      <Helmet>
        <title> FService | Lịch làm việc </title>
      </Helmet>

      <StaffLayout>
        <WorkTable />
      </StaffLayout>
    </>
  );
}
export default Staff;
