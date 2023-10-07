import React from "react";
import BannerPackage from "../components/packageDetail/BannerPackage";
import ListPackage from "../components/packageDetail/listpackage";
import Frame from "../components/packageDetail/Frame";
import WhyPackage from "../components/packageDetail/WhyPackage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../css/stylepackageDetail.css";

function PackageDetail() {
  return (
    <>
      <Header />
      <BannerPackage />
      <ListPackage />
      <Frame />
      <Footer />
    </>
  );
}

export default PackageDetail;
