import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
// import jwt from "jsonwebtoken";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ border: "1px solid black", padding: "10px" }}>
          <h1>Project SWP391 - FPTU - Student Home Membership</h1>
          <p>Instructor: PhuongLHK</p>
          <p>4 Members</p>
          <p>Dương Tôn Bảo - SE171065 </p>
          <p>Đặng Phan Gia Đức - SE171092 </p>
          <p>Phạm Ngọc Bảo - SE171066 -</p>

          <p> Nguyễn Bình Phương Trâm - SE171076</p>
        </div>
      </div>
    </>
  );
}

export default About;
