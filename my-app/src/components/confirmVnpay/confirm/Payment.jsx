import React, { Component } from "react";

export default function Payment() {
  return (
    <div className="container mt-1">
      <div className="pay mb-3">
        <div className="title-detail">
          <h2
            style={{ paddingLeft: "20px", color: "#757575", fontSize: "18px" }}
          >
            THÔNG TIN THANH TOÁN
          </h2>
          <div className="line-cf-vn" />
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
                <td>VNPAY</td>
              </tr>
              <tr>
                <td>Trạng thái thanh toán</td>
                <td>Đã thanh toán</td>
              </tr>
              <tr>
                <td>Thời gian thanh toán</td>
                <td>23/09/2023 06:05 PM</td>
              </tr>
              <tr>
                <td>Mã giao dịch</td>
                <td>897482374823749</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
