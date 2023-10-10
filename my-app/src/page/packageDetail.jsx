import React from "react";
import { Helmet } from "react-helmet";
import BannerPackage from "../components/packageDetail/BannerPackage";
import ListPackage from "../components/packageDetail/listpackage";
import Frame from "../components/packageDetail/Frame";
import WhyPackage from "../components/packageDetail/WhyPackage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../css/stylepackageDetail.css";

const PackageDetail = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <BannerPackage />
      <ListPackage />
      <Frame />
      <Footer />
    </>
  );
};

export default PackageDetail;
