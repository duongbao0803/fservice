import { Routes, Route, Link, redirect } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { createContext, useEffect, useState } from "react";
import { Launch } from "./services/UserService";
import AppRoutes from "./routes/AppRoutes";
export const Session = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const accesstoken = localStorage.getItem("accesstoken");

  useEffect(() => {
    getUserInfo();
  }, [accesstoken]);

  const getUserInfo = async () => {
    try {
      const res = await Launch();
      console.log("check res launch", res);
      if (res && res.status === 200) {
        console.log("check list", res);
        setUser(res.data);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("phoneNumber", res.data.phoneNumber);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("Error Getting info", error);
    }
  };

  return (
    <Session.Provider value={{ user, setUser }}>
      {/* <Header /> */}
      <AppRoutes />
      {/* <Footer /> */}
    </Session.Provider>
  );
}

export default App;
