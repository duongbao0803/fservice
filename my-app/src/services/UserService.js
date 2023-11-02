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
  let dmm = {};
  dmm = refreshdata();
  return config.get("/api/authentication/Launch", dmm);
};

const fetchUser = (page) => {
  let dmm = {};
  dmm = refreshdata();
  return config.get(`/api/accounts?PageNumber=${page}&PageSize=10`, dmm);
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

export {
  fetchUser,
  loginAPI,
  signUp,
  editUser,
  deleteUser,
  sendRefreshToken,
  Launch,
};
