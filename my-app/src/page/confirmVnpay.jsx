import React from "react";
import { Helmet } from "react-helmet";
import "../assets/css/styleconfirmvnpay.css";
import TitleConfirm from "../components/confirmVnpay/TitleConfirm";
import Info from "../components/confirmVnpay/Info";
import InfoPackage from "../components/confirmVnpay/InfoPackage";
import Contact from "../components/confirmVnpay/Contact";
import Payment from "../components/confirmVnpay/Payment";
import ConfirmButton from "../components/confirmVnpay/ConfirmButton";

function ConfirmVnpay() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Confirm</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TitleConfirm />
      <div
        className="confirm-vnpay"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="form-card-vn"
          style={{ backgroundColor: "#F8F8F8", width: "600px" }}
        >
          <Info />
          <InfoPackage />
          <Contact />
          <Payment />
          <ConfirmButton />
        </div>
      </div>
    </>
  );
}

export default ConfirmVnpay;
