import React from "react";
import "../assets/css/styleconfirmvnpay.css";
import TitleConfirm from "../components/confirm/TitleConfirm";
import Info from "../components/confirm/Info";
import InfoPackage from "../components/confirm/InfoPackage";
import Contact from "../components/confirm/Contact";
import Payment from "../components/confirmVnpay/Payment";
import ConfirmButton from "../components/confirm/ConfirmButton";

function ConfirmVnpay() {
  return (
    <>
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
