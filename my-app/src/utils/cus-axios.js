import axios from "axios";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

// console.log("check ls", localStorage.getItem("accesstoken"));
const config = axios.create({
  baseURL: "https://fservices.azurewebsites.net",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
  },
});

config.interceptors.response.use(
  function (response) {
    return response ? response : { status: response.status };
  },
  function (error) {
    let res = {};
    const eRes = error.response;
    if (error.response) {
      res.data = eRes.data;
      res.status = eRes.status;
      res.message = eRes.data.message;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return res;
  }
);

export default config;
