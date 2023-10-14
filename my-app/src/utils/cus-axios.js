import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = axios.create({
  baseURL: "https://fservices.azurewebsites.net",
  headers: {
    Authorization: `Bearer ${"eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIxMDA1aGFuaHBodWNAZ21haWwuY29tIiwianRpIjoiMzVhZWM5NjctOTk5MC00Y2U4LTg5YTctMzkwMzUyYjkyMWE1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU4iLCJleHAiOjE2OTcxMjA2ODcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODAiLCJhdWQiOiJVc2VyRlNlcnZpY2VzIn0.Fe0sB6UfNYnGXeGJ1jB8TEmgFavNMSSHzXrQsc_2QtPtDy46zAFBGtU8n5EZI2A5uytPB11osF8EgSEOUG-CgQ"}`,
  },
});

// res.data = error.response.data;
//       res.headers = error.response.headers;
//       res.status = error.response.status;
//       res.data.title = error.response.data.title;
//       res.data.email = error.response.data.errors
//         ? error.response.data.errors.Email[0]
//         : {};

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
      res.headers = eRes.headers;
      res.status = eRes.status;
      // res.data.title = eRes.data.title;
      res.email = error.response.data.errors.Email[0];
      //         ? error.response.data.errors.Email[0]
      //         : {};;
      console.log("cehckkk", error.response.data.errors.Email[0]);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return res;
  }
);

export default config;
