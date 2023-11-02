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

  const { startDate, endDate, TypeRoomForSelectedHouse, price, room, tower } =
    state;

  console.log(
    "check all",
    startDate,
    endDate,
    TypeRoomForSelectedHouse,
    price,
    room,
    tower
  );
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
          <InfoPackage
            startDate={startDate}
            endDate={endDate}
            TypeRoomForSelectedHouse={TypeRoomForSelectedHouse}
            room={room}
            tower={tower}
          />
          <Contact />
          <Payment price={price} startDate={startDate} />
          <ConfirmButton />
        </div>
      </div>
    </>
  );
}

export default Confirm;
