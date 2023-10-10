import axios from "axios";

const fetchUser = () => {
  // return axios.get(`https://reqres.in/api/users?page=${page}`);
  const token =
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIxMDA1aGFuaHBodWNAZ21haWwuY29tIiwianRpIjoiMDk4YTQyODEtYzI3Yi00ODY1LWI4NzctMDYwOGY1NTE1ZWI4IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU4iLCJleHAiOjE2OTY4NzI2NjAsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODAiLCJhdWQiOiJVc2VyRlNlcnZpY2VzIn0.6-6bY3kWj-t_CnTU7pzZYJAddGGGlSfnapXQzPcinN1mhX81Zeay_5nA6vJYqvs6pgpMVD3_StEhqfDiJmRltA";
  return axios.get(
    "https://fservices.azurewebsites.net/api/packages"
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
  );
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
