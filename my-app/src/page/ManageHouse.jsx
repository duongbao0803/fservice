import "../assets/css/stylemanageHouse.css";
import React from "react";
import Rightbar_house from "../components/ManageHouse/Rightbar_house";
import UserLayout from "../Layout/UserLayout";
import { Helmet } from "react-helmet";
function ManageHouse() {
  return (
    <>
      <Helmet>
        <title> FService | Căn hộ </title>
      </Helmet>
      <UserLayout>
        <Rightbar_house />
      </UserLayout>
    </>
  );
}

export default ManageHouse;
