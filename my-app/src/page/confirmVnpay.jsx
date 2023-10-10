import React from "react";
import "../css/styleconfirmvnpay.css";
import TitleConfirm from "../components/confirmVnpay/TitleConfirm";
import Info from "../components/confirmVnpay/Info";
import InfoPackage from "../components/confirmVnpay/InfoPackage";
import Contact from "../components/confirmVnpay/Contact";
import Payment from "../components/confirmVnpay/Payment";
import ConfirmButton from "../components/confirmVnpay/ConfirmButton";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ConfirmVnpay() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default ConfirmVnpay;
