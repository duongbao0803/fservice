import axios from "axios";
import config from "../utils/cus-axios";

const fetchUser = (page) => {
  return config.get(`/api/accounts?PageNumber=${page}&PageSize=2`);
};

// const loginAPI = (email, password) => {
//   const token =
//     "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIxMDA1aGFuaHBodWNAZ21haWwuY29tIiwianRpIjoiM2IwMTcwMzktMDhiZi00NTNjLTg0YmMtNDBiYzYxYzdmZTQ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU4iLCJleHAiOjE2OTcwMTcxMDIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODAiLCJhdWQiOiJVc2VyRlNlcnZpY2VzIn0.h0by8biXP5xvc00rGql3m0Ga0Bdr1-fctzRakhAO8YBaGlMWBM1mMrLkzxCkViyc6JDfns7td7UylyQhh6wpRQ";
//   return axios.post(
//     "https://fservices.azurewebsites.net/api/authentication/SignIn",
//     { email, password },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
// };

const loginAPI = (email, password) => {
  return config.post("/api/authentication/SignIn", { email, password });
};

const editUser = (name, phoneNumber) => {
  return config.put("https://reqres.in/api/users/2", {
    name,
    phoneNumber,
  });
};

// const deleteUser = (id) => {
//   return axios.delete(`https://reqres.in/api/users/${id}`);
// };

const deleteUser = (id) => {
  return config.delete(`/api/accounts/${id}`);
};

export { fetchUser, loginAPI, editUser, deleteUser };
