import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
  return formattedDate;
};

export const PriceFormat = ({ price }) => {
  const formattedPrice = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return <span>{formattedPrice}</span>;
};

export const handleLogout = (navigate) => {
  localStorage.removeItem("accesstoken");
  localStorage.removeItem("refreshtoken");
  localStorage.removeItem("isLogged");
  localStorage.removeItem("username");
  localStorage.removeItem("phoneNumber");
  localStorage.removeItem("name");
  localStorage.removeItem("dateOfBirth");
  localStorage.removeItem("address");
  localStorage.removeItem("avatar");
  localStorage.removeItem("name");
  localStorage.removeItem("role");
  toast.success("Đăng xuất thành công");
  navigate("/authen");
};
