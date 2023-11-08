import { Routes, Route, Link, redirect } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { createContext, useEffect, useState } from "react";
import { Launch, sendRefreshToken } from "./services/UserService";
import AppRoutes from "./routes/AppRoutes";
export const Session = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [accesstoken, setAccessToken] = useState(
    localStorage.getItem("accesstoken")
  );
  const [refreshtoken, setRefreshToken] = useState(
    localStorage.getItem("refreshtoken")
  );

  useEffect(() => {
    getUserInfo();
  }, [accesstoken]);

  useEffect(() => {
    // updateAccessToken();
  }, []);

  const refreshToken = async () => {
    const data = { accesstoken, refreshtoken };
    console.log("check data", data);
    try {
      const response = await sendRefreshToken(data);
      console.log("chec res", response);
      // Kiểm tra nếu request thành công
      if (response.status === 200) {
        const newAccessToken = response.data.accessToken;

        // Lưu newAccessToken vào localStorage hoặc Redux Store
        // Ví dụ:
        localStorage.setItem("accessToken", newAccessToken);

        return newAccessToken;
      } else {
        // Xử lý lỗi ở đây nếu cần
      }
    } catch (error) {
      console.log("Error rf", error);
    }
  };
  refreshToken();

  const getUserInfo = async () => {
    try {
      const res = await Launch();
      console.log("check res launch", res);
      if (res && res.status === 200) {
        setUser(res.data);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("phoneNumber", res.data.phoneNumber);
        localStorage.setItem("dateOfBirth", res.data.dateOfBirth);
        localStorage.setItem("address", res.data.address);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("Error Getting info", error);
    }
  };
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
