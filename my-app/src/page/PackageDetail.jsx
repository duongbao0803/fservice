import React from "react";
import { Helmet } from "react-helmet";
import BannerPackage from "../components/PackageDetails/BannerPackage";
import Frame from "../components/PackageDetails/Frame";
import ListPackage from "../components/PackageDetails/ListPackage";
import "../assets/css/stylePackageDetail.css";

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
      </div>
    </>
  );
};

export default PackageDetail;
