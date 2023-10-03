import React from "react";
import Banner from "../components/Banner";
import ServiceList from "../components/ServiceList";
import Reason from "../components/Reason";
import UseProcess from "../components/UseProcess";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Package from "../components/Package";

function HomePage() {
  return (
    <div className="PackagePage">
      {/* <Header></Header> */}
      <Package></Package>
    </div>
  );
}

export default HomePage;
