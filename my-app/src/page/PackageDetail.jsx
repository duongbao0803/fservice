import React from "react";
import { Helmet } from "react-helmet";
import BannerPackage from "../components/PackageDetails/BannerPackage";
import Frame from "../components/PackageDetails/Frame";
import ListPackage from "../components/PackageDetails/ListPackage";
import "../assets/css/stylepackageDetail.css";
import ServiceList from "../components/HomePage/ServiceList";

const PackageDetail = () => {
  return (
    <>
      <Helmet>
        <title>FService | Chi tiết gói</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <BannerPackage />
      <div className="section mb-5 mt-5">
        <ListPackage />
        <Frame />
        <ServiceList />
      </div>
    </>
  );
};

export default PackageDetail;
