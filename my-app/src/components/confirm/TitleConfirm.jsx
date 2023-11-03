import React, { Component } from "react";

export default function TitleConfirm() {
  return (
    <div className="container mb-5 mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="location">
            <i className="fa-solid fa-house" style={{ color: "#ff8228" }} />
            &nbsp;<h5 className="d-inline">Trang chủ</h5>&nbsp;&nbsp;&nbsp;
            <i
              className="fa-solid fa-caret-right"
              style={{ color: "#ff8228" }}
            ></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h5 className="d-inline">Xác nhận dịch vụ</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
