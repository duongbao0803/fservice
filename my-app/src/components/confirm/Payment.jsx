import React, { Component } from "react";

export default function Payment() {
  return (
    <div className="container mt-5">
      <div className="pay mb-3">
        <div className="title-detail">
          <h2
            style={{ paddingLeft: "20px", color: "#757575", fontSize: "18px" }}
          >
            THÔNG TIN THANH TOÁN
          </h2>
          <div className="line" />
        </div>
        <div className="table-custom">
          <table>
            <tbody>
              <tr>
                <td>Ngày đặt dịch vụ</td>
                <td>23/09/2023 03:00 PM </td>
              </tr>
              <tr>
                <td>Số tiền</td>
                <td>250.000đ</td>
              </tr>
              <tr>
                <td>Phương thức thanh toán</td>
                <td>Tiền mặt</td>
              </tr>
              <tr>
                <td>Trạng thái thanh toán</td>
                <td>Chưa thanh toán</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
