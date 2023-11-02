import axios from "axios";
import config from "../utils/cus-axios";

const refreshdata = () => {
  let accesstoken = localStorage.getItem("accesstoken");
  let confi = {};
  if (accesstoken !== null)
    confi = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
  console.log("iam here", confi);
  return confi;
};

const Launch = () => {
  const refreshedConfig = refreshdata();
  return config.get("/api/authentication/Launch", refreshedConfig);
};

const fetchUser = (page) => {
  const refreshedConfig = refreshdata();
  return config.get(
    `/api/accounts?PageNumber=${page}&PageSize=10`,
    refreshedConfig
  );
};

const loginAPI = (email, password) => {
  // let dmm = {};
  // dmm = refreshdata();
  return config.post("/api/authentication/SignIn", { email, password });
};

const sendRefreshToken = () => {
  // let dmm = {};
  // dmm = refreshdata();
  return config.post("/api/authentication/Refresh-token");
};

const signUp = (userData) => {
  // let dmm = {};
  // dmm = refreshdata();
  return config.post("/api/authentication/SignUp", userData);
};

const editUser = (id) => {
  // let dmm = {};
  // dmm = refreshdata();
  return config.put(`/api/accounts/${id}`);
};

const deleteUser = (id) => {
  // let dmm = {};
  // dmm = refreshdata();
  return config.delete(`/api/accounts/${id}`);
};

const Order = (data) => {
  const refreshedConfig = refreshdata();
  return config.post("/api/orders", data, refreshedConfig);
};

export {
  fetchUser,
  loginAPI,
  signUp,
  editUser,
  deleteUser,
  sendRefreshToken,
  Launch,
  Order,
};
