import axios from "axios";

const fetchUser = () => {
  return axios.get("https://fservices.azurewebsites.net/api/accounts");
};

const LoginAPI = (email, password) => {
  return axios.post(
    "https://fservices.azurewebsites.net/api/authentication/SignIn",
    { email, password }
  );
};

export { fetchUser, LoginAPI };
