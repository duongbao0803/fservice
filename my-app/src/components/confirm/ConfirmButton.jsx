import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import config, { useTokenUpdateEffect } from "../../utils/cus-axios";
import { Order, order } from "../../services/UserService";
import { toast } from "react-toastify";

function ConfirmButton(props) {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const data = props.state.formData;
    try {
      let res = await Order(data);
      if (res && res.status === 200) {
        console.log("check order confirm", res.data.paymentUrl);

        console.log("check order confirm", res.data.paymentUrl);
        toast.success("Đơn hàng tạo thành công, vui lòng chờ trong giây lát", {
          autoClose: 2000,
        });
        setTimeout(() => {
          window.open(res.data.paymentUrl, "_blank");
        }, 3000);
      } else {
        toast.error("Đơn hàng tạo thất bại");
        navigate("/");
      }
    } catch (error) {
      console.log("check submit", error);
    }
  };

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
          <button
            className="done-btn"
            type="button"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "700",
              border: "none",
              backgroundColor: "#ff8228",
            }}
            onClick={handleSubmit}
          >
            HOÀN TẤT
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConfirmButton;
