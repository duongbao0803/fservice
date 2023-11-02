import React, { Component } from "react";
import PriceFormat from "../PackageDetails/PriceFormat";
// import PriceFormat from "../PackageDetails/PriceFormat";

export default function Payment(props) {
  return (
    <div className="container mt-1">
      <div className="pay mb-3">
        <div className="title-detail">
          <h2
            style={{ paddingLeft: "20px", color: "#757575", fontSize: "18px" }}
          >
            THÔNG TIN THANH TOÁN
          </h2>
          <div className="line-confirm" />
        </div>
        <div className="table-custom">
          <table>
            <tbody>
              <tr>
                <td>Ngày đặt dịch vụ</td>
                <td> {props.state.orderDate} </td>
              </tr>
              <tr>
                <td>Số tiền</td>
                <td>
                  <PriceFormat price={props.state.price} />
                  {/* {props.state.price} */}
                </td>
              </tr>
              <tr>
                <td>Phương thức thanh toán</td>
                <td>VNPAY</td>
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
