import React from "react";
import { Helmet } from "react-helmet";
import "../css/styleconfirm.css";
import TitleConfirm from "../components/confirm/TitleConfirm";
import Info from "../components/confirm/Info";
import InfoPackage from "../components/confirm/InfoPackage";
import Contact from "../components/confirm/Contact";
import Payment from "../components/confirm/Payment";
import ConfirmButton from "../components/confirm/ConfirmButton";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Confirm = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Confirm</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <TitleConfirm />
      <div
        className="confirm"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="form-card"
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
};

export default Confirm;
