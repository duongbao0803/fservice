import React from "react";
import "../assets/css/styleMP_Details.css";
import Rightbar_Details from "../components/ManagePackage_Details/Rightbar_Details";
import { useLocation, useParams } from "react-router-dom";
import UserLayout from "../components/Layout/UserLayout";

function ManagePackage_Details() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const buildingName = searchParams.get("buildingName");
  const roomNo = searchParams.get("roomNo");
  const { id } = useParams();

  console.log("check id", id);
  return (
    <UserLayout>
      <Rightbar_Details
        id={id}
        buildingName={buildingName}
        roomNo={roomNo}
      />
    </UserLayout>

  );
}

export default ManagePackage_Details;
