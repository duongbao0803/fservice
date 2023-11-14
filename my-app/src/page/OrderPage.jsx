import React from "react";
import Order from "../components/OrderCart/Order";
import { Helmet } from "react-helmet";

const OrderPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Đặt hàng</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="homePage">
        <Order></Order>
      </div>
    </>
  );
};

export default OrderPage;
