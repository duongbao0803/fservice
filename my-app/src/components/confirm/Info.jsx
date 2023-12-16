/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { useLocation } from "react-router-dom";

export default function Info() {
  const { state } = useLocation();
  return (
    // form
    <div className="card-confirm" style={{ backgroundColor: "#F8F8F8" }}>
      <h3 className="form-title-cf text-center mb-3" style={{ color: "white" }}>
        {state.formData.packageName}
      </h3>
      <div className="title" style={{ display: "flex", alignItems: "center" }}>
        <div className="tilte-img">
          <img
            src={require("../../assets/img/title-confirm.png")}
            className="img-fluid"
            alt="Image"
          />
        </div>
        <div className="icon-title">
          <h5 style={{ marginLeft: "10px" }}>{state.formData.packageName}</h5>
        </div>
      </div>
    </div>
  );
}
