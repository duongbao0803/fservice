import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header></Header>
      <div style={{ minHeight: "100vh" }}>
        <h1>Hihi Bảo chào Đứt</h1>
      </div>
      <Footer />
    </>
  );
}

export default About;
