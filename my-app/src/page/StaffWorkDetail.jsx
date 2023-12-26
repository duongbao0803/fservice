import React, { useContext, useEffect } from "react";
import "../assets/css/styleStaffWork.css";
import WorkDetail from "../components/StaffPage/WorkDetail";
import StaffLayout from "../Layout/StaffLayout";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

function Staff() {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title> FService | Lịch làm việc </title>
      </Helmet>

      <StaffLayout>
        <WorkDetail id={id} />
      </StaffLayout>
    </>
  );
}
export default Staff;
