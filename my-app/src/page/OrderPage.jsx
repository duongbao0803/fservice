import React from "react";
import { Outlet, Link } from "react-router-dom";

import ServiceList from "../components/HomePage/ServiceList";
import Reason from "../components/HomePage/Reason";
import UseProcess from "../components/HomePage/UseProcess";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Field from "../components/HomePage/Field";
import Order from "../components/OrderCart/Order";
import { Helmet } from "react-helmet";

const OrderPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Order</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="homePage">
        <Order></Order>
      </div>
    </>
  );
};

export default OrderPage;
