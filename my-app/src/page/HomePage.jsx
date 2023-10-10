import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Banner from "../components/HomePage/Banner";
import ServiceList from "../components/HomePage/ServiceList";
import Reason from "../components/HomePage/Reason";
import UseProcess from "../components/HomePage/UseProcess";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Field from "../components/HomePage/Field";

const HomePage = () => {
  return (
    <div className="homePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Banner />
      <ServiceList />
      <Reason />
      <UseProcess />
      <Field />
      <Footer />
    </div>
  );
};

export default HomePage;
