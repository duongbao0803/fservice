import React from "react";
import "../assets/css/styleMP_Details.css";
import "../assets/css/styleMP_Use.css";
import Rightbar_Use from "../components/ManagePackage_Use/Rightbar_Use";
import UserLayout from "../components/Layout/UserLayout";
function ManagePackage_Use() {
  return (
    <UserLayout>
      <Rightbar_Use />
    </UserLayout>
  );
}

export default ManagePackage_Use;
