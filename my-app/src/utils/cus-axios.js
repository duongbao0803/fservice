import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useEffect } from "react";

const accesstoken = localStorage.getItem("accesstoken");

const config = axios.create({
  baseURL: "https://fservices.azurewebsites.net",
  headers: {
    Authorization: `Bearer ${accesstoken}`,
  },
});

config.interceptors.response.use(
  function (response) {
    console.log("check response", response.status);
    return response ? response : { status: response.status };
  },
  function (error) {
    let res = {};
    const eRes = error.response;
    if (error.response) {
      res.data = eRes.data;
      res.status = eRes.status;
      res.message = eRes.data.message;
      console.log("check data", res.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return res;
  }
);

export default config;
