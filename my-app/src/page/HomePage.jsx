import React from "react";
import { Helmet } from "react-helmet";
import ServiceList from "../components/HomePage/ServiceList";
import Reason from "../components/HomePage/Reason";
import UseProcess from "../components/HomePage/UseProcess";
import Field from "../components/HomePage/Field";
import "react-loading-skeleton/dist/skeleton.css";
import Slider from "../components/HomePage/Slider";
import slides from "../shared/data.json";

const HomePage = () => {
  return (
    <div className="homePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Trang chủ</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Slider slides={slides} />
      <ServiceList />
      <Reason />
      <UseProcess />
      <Field />
    </div>
  );
};

export default HomePage;
