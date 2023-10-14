import React from "react";
import { Helmet } from "react-helmet";
import BannerPackage from "../components/packageDetail/BannerPackage";
import ListPackage from "../components/packageDetail/ListPackage";
import Frame from "../components/packageDetail/Frame";
import "../css/stylepackageDetail.css";

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
