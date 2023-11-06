import React from "react";
import "../assets/css/styleconfirm.css";
import TitleConfirm from "../components/confirm/TitleConfirm";
import Info from "../components/confirm/Info";
import InfoPackage from "../components/confirm/InfoPackage";
import Contact from "../components/confirm/Contact";
import Payment from "../components/confirm/Payment";
import ConfirmButton from "../components/confirm/ConfirmButton";
import { AppDataProvider } from "../components/OrderCart/Order";
import { useLocation } from "react-router-dom";

function Confirm() {
  const { state } = useLocation();

  if (state !== null) {
    return (
      <>
        <TitleConfirm />
        <div
          className="confirm mb-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="form-card"
            style={{ backgroundColor: "#F8F8F8", width: "600px" }}
          >
            <Info />
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
