import React from "react";
import { Helmet } from "react-helmet";
import BannerPackage from "../components/PackageDetail/BannerPackage";
import Frame from "../components/PackageDetail/Frame";
import "../css/stylepackageDetail.css";
import ListPackage from "../components/PackageDetail/ListPackage";

const PackageDetail = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Detail</title>
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
