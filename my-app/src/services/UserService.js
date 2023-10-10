import axios from "axios";

const fetchUser = (page) => {
  const token =
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIxMDA1aGFuaHBodWNAZ21haWwuY29tIiwianRpIjoiNTY3MWQwY2EtNWY3MC00ZWNhLWIwNDQtMGExMjJiNGYyYWE2IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU4iLCJleHAiOjE2OTY5MTY1MjIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODAiLCJhdWQiOiJVc2VyRlNlcnZpY2VzIn0.5aaG3VhC51sL1bW7F1YwCuf0NL75gW5OgiPe0ICodPfooq31sxYqVDbXqFZbDOoZyLT6O3X3Q-P9yn_-hRvyNw";
  return axios.get(
    `https://fservices.azurewebsites.net/api/accounts?PageNumber=${page}&PageSize=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
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

// const deleteUser = (id) => {
//   return axios.delete(`https://reqres.in/api/users/${id}`);
// };

const deleteUser = () => {
  const token =
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIxMDA1aGFuaHBodWNAZ21haWwuY29tIiwianRpIjoiNTY3MWQwY2EtNWY3MC00ZWNhLWIwNDQtMGExMjJiNGYyYWE2IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU4iLCJleHAiOjE2OTY5MTY1MjIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODAiLCJhdWQiOiJVc2VyRlNlcnZpY2VzIn0.5aaG3VhC51sL1bW7F1YwCuf0NL75gW5OgiPe0ICodPfooq31sxYqVDbXqFZbDOoZyLT6O3X3Q-P9yn_-hRvyNw";
  return axios.delete(
    "https://fservices.azurewebsites.net/api/accounts/3b4b1e75-3f6d-424b-a815-d462e88c65d3",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export { fetchUser, loginAPI, editUser, deleteUser };
