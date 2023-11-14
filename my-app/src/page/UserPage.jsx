import React from "react";
import "../assets/css/styleUserCommon.css";
import UserInfo from "../components/UserPage/UserInfo";
import "../assets/css/styleUserInfo.css";
import UserLayout from "../Layout/UserLayout";

function UserPage() {
  return (
    <UserLayout>
      <UserInfo />
    </UserLayout>
  );
}

export default UserPage;
