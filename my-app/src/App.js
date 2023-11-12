import "./App.css";

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
        setUser(res.data);
        localStorage.setItem("id", res.data.id);

        localStorage.setItem("name", res.data.name);
        localStorage.setItem("phoneNumber", res.data.phoneNumber);
        localStorage.setItem("dateOfBirth", res.data.dateOfBirth);
        localStorage.setItem("address", res.data.address);
        localStorage.setItem("avatar", res.data.avatar);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("Error Getting info", error);
    }
  };

  return (
    <>
      <Session.Provider value={{ user, setUser }}>
        <AppRoutes />
      </Session.Provider>
    </>
  );
}

export default App;
