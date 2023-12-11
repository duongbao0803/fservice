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

const getApartmentInfo = (apartmentId) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/apartments/${apartmentId}`, refreshedConfig);
};

const getApartmentId = (id) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/apartments/${id}`, refreshedConfig);
};

const getApartmentPackage = (id) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/apartment-packages/apartment/${id}`, refreshedConfig);
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

const getAddApartment = (floorId, typeId) => {
  const refreshedConfig = refreshData();
  return config.get(
    `/api/apartments?floorId=${floorId}&typeId=${typeId}`,
    refreshedConfig
  );
};

const getStaffWork = (username) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/staffworks/${username}`, refreshedConfig);
};

const getStaffWorkPaging = (username) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/staffworks/${username}?PageSize=50`, refreshedConfig);
};

const getStaffByUsingId = (id) => {
  const refreshedConfig = refreshData();
  return config.get(`/account-by-id/${id}`, refreshedConfig);
};

const getOrder = (id, data) => {
  const refreshedConfig = refreshData();
  return config.put(`/api/staffworks/${id}`, data, refreshedConfig);
};

const usingPackage = (data) => {
  const refreshedConfig = refreshData();
  return config.post("/api/usepackages", data, refreshedConfig);
};

const confirmWork = (id, data) => {
  const refreshedConfig = refreshData();
  return config.put(`/api/staffworks/${id}`, data, refreshedConfig);
};

const getApartmentType = (buildingId) => {
  const refreshedConfig = refreshData();
  return config.get(`/api/types?buildingId=${buildingId}`, refreshedConfig);
};

const createApartment = (id, username) => {
  const refreshedConfig = refreshData();
  return config.put(
    `/api/apartments/${id}?userName=${username}`,
    refreshedConfig
  );
};

const getUsingHistory = (apartmentPackgeId, pageNumber) => {
  const refreshedConfig = refreshData();
  return config.get(
    `/api/orderdetails/apartment-package/${apartmentPackgeId}?PageNumber=${pageNumber}&PageSize=2`,
    refreshedConfig
  );
};

const getOrderHistory = (username, pageNumber) => {
  const refreshedConfig = refreshData();
  return config.get(
    `/api/orders/${username}?PageNumber=${pageNumber}&PageSize=2`,
    refreshedConfig
  );
};

const getOrderHistorySuccess = (username, pageNum) => {
  const refreshedConfig = refreshData();
  return config.get(
    `/api/orders/${username}?PageNumber=${pageNum}&PageSize=2&Sort=success`,
    refreshedConfig
  );
};

const getOrderHistoryError = (username, pageNum) => {
  const refreshedConfig = refreshData();
  return config.get(
    `/api/orders/${username}?PageNumber=${pageNum}&PageSize=2&Sort=error`,
    refreshedConfig
  );
};

const getCustomerConfirm = (orderDetailId, data) => {
  const refreshedConfig = refreshData();
  return config.put(
    `/api/orderdetails/${orderDetailId}`,
    data,
    refreshedConfig
  );
};

const getAllNotification = (pageNum) => {
  const refreshedConfig = refreshData();
  return config.get(
    `/api/notifications/account?PageNumber=${pageNum}&PageSize=3`,
    refreshedConfig
  );
};

const markNotificationRead = (id) => {
  const refreshedConfig = refreshData();
  return config.put(
    `/api/notifications/${id}`,
    refreshedConfig
  );
}

const markAllNotificationRead = () => {
  const refreshedConfig = refreshData();
  return config.put(
    `/api/notifications/account`,
    refreshedConfig
  );
}

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
  getAddApartment,
  getStaffWork,
  getStaffByUsingId,
  getOrder,
  usingPackage,
  confirmWork,
  createApartment,
  getApartmentType,
  getUsingHistory,
  getOrderHistory,
  getStaffWorkPaging,
  getCustomerConfirm,
  getOrderHistorySuccess,
  getOrderHistoryError,
  getApartmentInfo,
  getAllNotification,
  markNotificationRead,
  markAllNotificationRead
};
