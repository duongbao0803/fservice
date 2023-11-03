import React, { Component, useContext } from "react";
import { Session } from "../../App";

export default function Contact() {
  return (
    <div className="container mt-1">
      <div className="contact mb-3">
        <div className="title-detail">
          <h2
            style={{ paddingLeft: "20px", color: "#757575", fontSize: "18px" }}
          >
            THÔNG TIN LIÊN HỆ
          </h2>
          <div className="line-confirm" />
        </div>
        <div className="table-custom">
          <table>
            <tbody>
              <tr>
                <td>Tên liên hệ</td>
                <td>{localStorage.getItem("name")}</td>
              </tr>
              <tr>
                <td>Số điện thoại</td>
                <td>{localStorage.getItem("phoneNumber")}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{localStorage.getItem("username")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
