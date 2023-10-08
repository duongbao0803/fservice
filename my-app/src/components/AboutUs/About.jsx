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
        <h1>Project SWP391 - FPTU - Student Home Membership</h1>
        <p>Instructor: PhuongLHK</p>
        <p>4 Members</p>
        <p>Dương Tôn Bảo - SE171065 </p>
        <p>Đặng Phan Gia Đức - SE171092 </p>
        <p>Phạm Ngọc Bảo - SE171066 -</p>

        <p> Nguyễn Bình Phương Trâm - SE171076</p>
      </div>
      <Footer />
    </>
  );
}

export default About;
