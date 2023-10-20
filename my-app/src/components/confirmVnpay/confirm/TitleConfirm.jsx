import React, { Component } from "react";

export default function TitleConfirm() {
  return (
    <div className="container-cf-vn"
    style={{paddingLeft: "80px",
    fontSize: "20px"
  }}
    >
      {/* title */}
      <div className="title d-flex mb-4">
        <p>
          <i className="fa-solid fa-house mr-2" style={{ color: "#ff8228" }} />
          Trang chủ
        </p>
        <p>
          <i
            className="fa-solid fa-caret-right mr-2"
            style={{ color: "#ff8228" }}
          />{" "}
          Xác nhận dịch vụ
        </p>
      </div>
    </div>
  );
}
