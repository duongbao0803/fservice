import React from "react";
import "../assets/css/styleConfirm.css";
import TitleConfirm from "../components/Confirm/TitleConfirm";
import Info from "../components/Confirm/Info";
import InfoPackage from "../components/Confirm/InfoPackage";
import Contact from "../components/Confirm/Contact";
import Payment from "../components/Confirm/Payment";
import ConfirmButton from "../components/Confirm/ConfirmButton";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

function Confirm() {
  const { state } = useLocation();

  if (state !== null) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>FService | Xác nhận</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <TitleConfirm />
        <div
          className="confirm mb-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="form-card"
            style={{ backgroundColor: "#F8F8F8", width: "600px" }}
          >
            <Info state={state} />
            <InfoPackage state={state} />
            <Contact />
            <Payment state={state} />
            <ConfirmButton state={state} />
          </div>
        </div>
      </>
    );
  }
}
export default Confirm;
