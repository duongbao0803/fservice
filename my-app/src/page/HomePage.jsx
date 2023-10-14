import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ServiceList from "../components/HomePage/ServiceList";
import Reason from "../components/HomePage/Reason";
import UseProcess from "../components/HomePage/UseProcess";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Field from "../components/HomePage/Field";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Slider from "../components/HomePage/Slider";
import slides from "../data.json";

const HomePage = () => {
  return (
    <div className="homePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Home</title>
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
