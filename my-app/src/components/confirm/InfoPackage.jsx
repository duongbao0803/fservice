import React, { Component } from "react";

export default function InfoPackage() {
  return (
    <div className="container mt-5">
      <div className="detail mb-3">
        <div className="title-detail">
          <h2
            style={{ paddingLeft: "20px", color: "#757575", fontSize: "18px" }}
          >
            CHI TIẾT CÔNG VIỆC
          </h2>
          <div className="line" />
        </div>
        <div className="table-custom">
          <table>
            <tbody>
              <tr>
                <td>Địa chỉ</td>
                <td>
                  <p>Vinhomes Grand Park</p>
                  <p>S101-Tầng 3-Số phòng 0309</p>
                </td>
              </tr>
              <tr>
                <td>Thời hạn gói</td>
                <td>23/09/2023-23/10/2023</td>
              </tr>
              <tr>
                <td>Thời gian làm việc</td>
                <td>09:00 AM</td>
              </tr>
              <tr>
                <td>Loại phòng</td>
                <td>1 Phòng ngủ</td>
              </tr>
              <tr>
                <td>Ghi chú cho nhân viên</td>
                <td>NO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
