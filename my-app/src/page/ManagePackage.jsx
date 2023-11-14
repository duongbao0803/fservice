import React from "react";
import "../assets/css/stylemanagePackage.css";
import Rightbar from "../components/ManagePackage/Rightbar";
import UserLayout from "../Layout/UserLayout";
import { Helmet } from "react-helmet";
function ManagePackage() {
  return (
    <>
      <Helmet>
        <title> FService | Dịch vụ </title>
      </Helmet>
      <UserLayout>
        <Rightbar />
      </UserLayout>
    </>
  );
}

export default ManagePackage;
