import "../assets/css/stylemanageHouse.css";
import React from "react";
import Rightbar_house from "../components/ManageHouse/Rightbar_house";
import UserLayout from "../components/Layout/UserLayout";
function ManageHouse() {
  return (
    <UserLayout>
      <Rightbar_house/>
    </UserLayout>
  );
}

export default ManageHouse;
