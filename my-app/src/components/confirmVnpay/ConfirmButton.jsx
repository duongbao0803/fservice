import React, { Component } from "react";


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
            HOÀN TẤT
          </button>
        </div>
      </form>
    </div>
  );
}
