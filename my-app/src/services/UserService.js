import axios from "axios";
import config from "../utils/cus-axios";

const refreshData = () => {
  let accesstoken = localStorage.getItem("accesstoken");
  let config = {};
  if (accesstoken !== null)
    config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
  return config;
};

const Launch = () => {
  const refreshedConfig = refreshData();
  return config.get("/api/authentication/Launch", refreshedConfig);
};

const fetchUser = (page) => {
  const refreshedConfig = refreshData();
  return config.get(
    `/api/accounts?PageNumber=${page}&PageSize=10`,
    refreshedConfig
  );
};

const loginAPI = (email, password) => {
  const refreshedConfig = refreshData();
  return config.post(
    "/api/authentication/SignIn",
    { email, password },
    refreshedConfig
  );
};

const sendRefreshToken = (data) => {
  const refreshedConfig = refreshData();
  return config.post(
    "/api/authentication/Refresh-token",
    data,
    refreshedConfig
  );
};

const signUp = (userData) => {
  return config.post("/api/authentication/SignUp", userData);
};

const editUser = (id, data) => {
  const refreshedConfig = refreshData();
  return config.put(`/api/accounts/${id}`, data, refreshedConfig);
};

const deleteUser = (id) => {
  return config.delete(`/api/accounts/${id}`);
};

const Order = (data) => {
  const refreshedConfig = refreshData();
  return config.post("/api/orders", data, refreshedConfig);
};

const Payment = (data) => {
  const refreshedConfig = refreshData();
  return config.post("/api/payment", data, refreshedConfig);
};

const getApartment = (apartment) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/apartments?username=${apartment}`, refreshedConfig);
};

const getApartmentId = (id) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/apartments/${id}`, refreshedConfig);
};

const getApartmentPackage = (id) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/apartment-packages/apartment${id}`, refreshedConfig);
};

const getApartmentPackageDetail = (id) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/apartment-packages/${id}`, refreshedConfig);
};

const getFloor = (buildingId) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/floors?buidingId=${buildingId}`, refreshedConfig);
};

const getBuilding = () => {
  const refreshedConfig = refreshData();
  return config.get("/api/buildings", refreshedConfig);
};

const getApartmentByFloor = (floorId) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/apartments?floorId=${floorId}`, refreshedConfig);
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
  getApartmentPackage,
  getApartmentPackageDetail,
  getApartment,
  getApartmentId,
  Payment,
  getFloor,
  getApartmentByFloor,
  getBuilding,
};
