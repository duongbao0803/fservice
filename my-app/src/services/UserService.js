import axios from "axios";
import config from "../utils/cus-axios";

const fetchUser = (page) => {
  return config.get(`/api/accounts?PageNumber=${page}&PageSize=10`);
};

const Launch = () => {
  return config.get("/api/authentication/Launch");
};

const loginAPI = (email, password) => {
  return config.post("/api/authentication/SignIn", { email, password });
};

const sendRefreshToken = () => {
  return config.post("/api/authentication/Refresh-token");
};

const signUp = (userData) => {
  return config.post("/api/authentication/SignUp", userData);
};

const editUser = (id) => {
  return config.put(`/api/accounts/${id}`);
};

const deleteUser = (id) => {
  return config.delete(`/api/accounts/${id}`);
};

const launch = () => {
  return config.get("/api/authentication/Launch");
};

export {
  fetchUser,
  loginAPI,
  signUp,
  editUser,
  deleteUser,
  launch,
  sendRefreshToken,
  Launch,
};
