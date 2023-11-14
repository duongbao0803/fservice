import React from "react";
import "../assets/css/styleUserCommon.css";
import UserInfo from "../components/UserPage/UserInfo";
import "../assets/css/styleUserInfo.css";
import UserLayout from "../Layout/UserLayout";
import { Helmet } from "react-helmet";

function UserPage() {
  return (
    <>
      <Helmet>
        <title> FService | Thông tin </title>
      </Helmet>
      <UserLayout>
        <UserInfo />
      </UserLayout>
    </>
  );
}

export default UserPage;
