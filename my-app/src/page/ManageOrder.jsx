import React from "react";
import { Helmet } from "react-helmet";
import UserOrder from "../components/UserPage/UserOrder";
import UserLayout from "../Layout/UserLayout";
import "../assets/css/styleUserOrder.css";

function ManageOrder() {
  return (
    <>
      <Helmet>
        <title> FService | Đơn hàng </title>
      </Helmet>

      <UserLayout>
        <UserOrder />
      </UserLayout>
    </>
  );
}

export default ManageOrder;
