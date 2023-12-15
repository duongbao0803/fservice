import React from "react";
import { toast } from "react-toastify";
// import { Navigate, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;
  return formattedDate;
};

export const PriceFormat = ({ price }) => {
  const formattedPrice = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return <span>{formattedPrice}</span>;
};

export const formatTime = (date) => {
  if (!date) return "";

  const formattedTime = new Date(date).toLocaleTimeString();
  return formattedTime;
};

export const formatDateTime = (date) => {
  const formattedDate = new Date(date);

  const day = formattedDate.getDate().toString().padStart(2, "0");
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year = formattedDate.getFullYear().toString().slice(2, 4);
  const hours = formattedDate.getHours().toString().padStart(2, "0");
  const minutes = formattedDate.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

export const caculateTimeAgo = (datetime) => {
  const currentDate = new Date();
  const pastDate = new Date(datetime);
  const timeDifference = currentDate - pastDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return `vài giây trước`;
  } else if (minutes < 60) {
    return `${minutes} phút trước`;
  } else if (hours < 24) {
    return `${hours} giờ trước`;
  } else {
    return `${days} ngày trước`;
  }
};

export const handleLogout = (navigate) => {
  navigate("/authen");
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
};
