import React from "react";
import { Outlet, Link } from "react-router-dom";

import Banner from "../components/HomePage/Banner";
import ServiceList from "../components/HomePage/ServiceList";
import Reason from "../components/HomePage/Reason";
import UseProcess from "../components/HomePage/UseProcess";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Field from "../components/HomePage/Field";
// import "../css/style.css";

function HomePage() {
  return (
    <div className="homePage">
      <Header></Header>
      <Banner></Banner>
      <ServiceList></ServiceList>
      <Reason></Reason>
      <UseProcess></UseProcess>
      <Field></Field>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
