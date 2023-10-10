import React, { Component } from "react";

export default function Info() {
  return (
    // form
    <div className="card-cf-vn" style={{ backgroundColor: "#F8F8F8" }}>
      <h3 className="form-title-cf-vn text-center mb-3" style={{ color: "white" }}>
        VỆ SINH PHÒNG KHÁCH
      </h3>
      <div className="title" style={{ display: "flex", alignItems: "center" }}>
        <div className="tilte-img">
          <img
            src="./img/title-confirm.png"
            className="img-fluid"
            alt="Image"
          />
        </div>
        <div className="icon-title">
          <h5 style={{ marginLeft: "10px" }}>VỆ SINH PHÒNG KHÁCH</h5>
        </div>
      </div>
    </div>
  );
}
