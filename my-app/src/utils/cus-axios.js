import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = axios.create({
  baseURL: "https://fservices.azurewebsites.net",
  headers: {
    Authorization: `Bearer ${"eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIxMDA1aGFuaHBodWNAZ21haWwuY29tIiwianRpIjoiMWY3NjJhOGItM2Q5MC00ZWFmLTlmODEtYmIzMjZlOWE2ODZkIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU4iLCJleHAiOjE2OTc2ODQzOTksImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODAiLCJhdWQiOiJVc2VyRlNlcnZpY2VzIn0.lC6gsNrigNamCdrjR29Ih1wtIq0G9wrj2gfkH3gCUF5lAdKDEHktWPy4S5J4qNhi6WgDvRSXQwtTBhevgc4VEQ"}`,
  },
});

// config.interceptors.response.use(
//   function (response) {
//     console.log("check response", response.status);
//     return response ? response : { status: response.status };
//   },
//   function (error) {
//     let res = {};
//     const eRes = error.response;
//     if (error.response) {
//       res.data = eRes.data;
//       res.headers = eRes.headers;
//       res.status = eRes.status;
//       res.message = eRes.data.message;
//     } else if (error.request) {
//       console.log(error.request);
//     } else {
//       console.log("Error", error.message);
//     }
//     return res;
//   }
// );

export default config;
