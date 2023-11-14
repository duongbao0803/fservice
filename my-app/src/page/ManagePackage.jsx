import React from "react";
import "../assets/css/stylemanagePackage.css";
import Rightbar from "../components/ManagePackage/Rightbar";
import UserLayout from "../components/Layout/UserLayout";
function ManagePackage() {
  return (
    <UserLayout>
      <Rightbar />
    </UserLayout>
  );
}

export default ManagePackage;
