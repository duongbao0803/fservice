import React, { Component } from "react";
import { useAppData } from "../OrderCart/Order";
import { useLocation } from "react-router-dom";

export default function InfoPackage(props) {
  return (
    <div className="container mt-3">
      <div className="detail mb-3">
        <div className="title-detail">
          <h2
            style={{ paddingLeft: "20px", color: "#757575", fontSize: "18px" }}
          >
            CHI TIẾT CÔNG VIỆC
          </h2>
          <div className="line-confirm" />
        </div>
        <div className="table-custom">
          <table>
            <tbody>
              <tr>
                <td>Địa chỉ</td>
                <td>
                  <p>Vinhomes Grand Park</p>
                  <p>
                    {props.state.tower} - {props.state.room}
                  </p>
                </td>
              </tr>
              <tr>
                <td>Thời hạn gói</td>
                <td>
                  {props.state.startDate} - {props.state.endDate}
                </td>
              </tr>
              <tr>
                <td>Loại phòng</td>
                <td>{props.state.TypeRoomForSelectedHouse}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
