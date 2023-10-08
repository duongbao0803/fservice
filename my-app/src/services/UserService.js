import axios from "axios";

const fetchUser = () => {
  return axios.get("https://fservices.azurewebsites.net/api/accounts");
};

const loginAPI = (email, password) => {
  return axios.post(
    "https://fservices.azurewebsites.net/api/authentication/SignIn",
    { email, password }
  );
};

const editUser = (name, phoneNumber) => {
  return axios.put("https://reqres.in/api/users/2", {
    name,
    phoneNumber,
  });
};

const deleteUser = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`);
};

export { fetchUser, loginAPI, editUser, deleteUser };
