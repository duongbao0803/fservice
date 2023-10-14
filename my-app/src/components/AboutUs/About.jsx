import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
// import jwt from "jsonwebtoken";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";

function About() {
  const [userData, setUserData] = useState(null);
  // useEffect(() => {
  //   // Lấy token từ nơi lưu trữ (ví dụ: cookies, local storage)
  //   const token = Cookies.get("token");

  //   // Giải mã phần payload của token
  //   const decodedToken = JSON.parse(atob(token.split(".")[1]));
  //   console.log("cehckkk", decodedToken);
  //   // Trích xuất thông tin từ đối tượng đã giải mã
  //   // const { email, role } = decodedToken;

  //   // Cập nhật trạng thái userData
  //   setUserData(decodedToken);
  // }, []);

  // if (!userData) {
  //   return <p>Loading...</p>;
  // }

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
