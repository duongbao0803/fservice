import React from "react";
import { Outlet, Link } from "react-router-dom";

import Banner from "../components/HomePage/Banner";
import ServiceList from "../components/HomePage/ServiceList";
import Reason from "../components/HomePage/Reason";
import UseProcess from "../components/HomePage/UseProcess";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Field from "../components/HomePage/Field";
import Order from "../components/OrderCart/Order";

const OrderPage = () => {
  return (
    <div className="homePage">
      <Header></Header>
      <Order></Order>
      <Footer></Footer>
    </div>
  );
};

export default OrderPage;
