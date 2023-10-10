import React from "react";
import Footer from "../components/Footer/Footer";
// import Header from "../components/Header";

import Package from "../components/OrderPackage/Package";
import { Helmet } from "react-helmet";

// import "../css/style.css";

const PackagePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Service</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Package></Package>
    </>
  );
};

export default PackagePage;
