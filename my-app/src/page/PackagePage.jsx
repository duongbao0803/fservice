import React from "react";

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
      {/* <Filter></Filter> */}
    </>
  );
};

export default PackagePage;
