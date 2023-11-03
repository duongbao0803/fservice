import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ConfirmButton() {
  return (
    <div className="container-cf-btn">
      <form>
        <div className="form-check">
          <input
            required
            className="check-box"
            type="checkbox"
            defaultValue
            id="defaultCheck"
          />
          <label className="form-check-label" htmlFor="defaultCheck">
            Xác nhận
          </label>
        </div>
        <div className="btn-container">
          <button className="done-btn" type="button" style={{ color: "white" }}>
            <Link
              to="/confirmvnpay"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              HOÀN TẤT
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}
