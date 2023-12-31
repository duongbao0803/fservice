import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import config, { useTokenUpdateEffect } from "../../utils/cus-axios";
import { Order, order } from "../../services/UserService";
import { toast } from "react-toastify";

function ConfirmButton(props) {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async () => {
    const data = props.state.formData;
    if (!isChecked) {
      toast.error("Vui lòng nhấn nút xác nhận");
      return;
    }
    try {
      let res = await Order(data);
      if (res && res.status === 200) {
        toast.success("Đơn hàng tạo thành công, vui lòng chờ trong giây lát", {
          autoClose: 2000,
        });
        navigate("/");
        setTimeout(() => {
          window.open(res.data.paymentUrl, "_blank");
        }, 3000);
      } else if (res.message === "Package is using.") {
        toast.warning("Gói này đang được sử dụng. Vui lòng chọn gói khác");
        navigate("/");
      } else {
        toast.error("Đơn hàng tạo thất bại");
        navigate("/");
      }
    } catch (error) {
      console.log("Error Submitting", error);
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
            checked={isChecked}
            onChange={handleCheckboxChange}
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
