import React from "react";
import Banner from "../components/homePage/Banner/Banner";
import ServiceList from "../components/homePage/IntroService/ServiceList";
import Reason from "../components/homePage/ChooseService/Reason";
import UseProcess from "../components/homePage/UseProcessing/UseProcess";
import Footer from "../components/homePage/Footer/Footer";
import Header from "../components/homePage/Header/Header";
import Field from "../components/homePage/Experience/Field";
import "../css/style.css";

function HomePage() {
  return (
    <div className="homePage">
      {/* <Header></Header> */}
      <Banner></Banner>
      <ServiceList></ServiceList>
      <Reason></Reason>
      <UseProcess></UseProcess>
      <Field></Field>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default HomePage;
