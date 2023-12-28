import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Launch, updateDeviceToken } from "./services/UserService";
import AppRoutes from "./routes/AppRoutes";
import { fetchToken, onMessageListener } from "./firebase/firebase";
import { toast } from "react-toastify";

export const Session = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const accesstoken = localStorage.getItem("accesstoken");

  // firebase message
  const [isDeviceTokenFound, setDeviceTokenFound] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

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

        // send token
        if (
          localStorage.getItem("id") !== null &&
          localStorage.getItem("deviceToken") !== null
        ) {
          const tokenData = {
            accountId: localStorage.getItem("id"),
            deviceToken: localStorage.getItem("deviceToken"),
          };
          sendToken(tokenData.accountId, tokenData);
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("Error Getting info", error);
    }
  };

  // firebase cloud message
  useEffect(() => {
    fetchToken(setDeviceTokenFound);
  }, []);

  // onMessageListener()
  //   .then((payload) => {
  //     setNotification({
  //       title: payload.notification.title,
  //       body: payload.notification.body,
  //     });
  //     console.log("check noti", payload);
  //     toast.info(payload.notification.body);
  //   })
  //   .catch((err) => console.log("failed: ", err));

  const sendToken = async (id, data) => {
    try {
      const res = await updateDeviceToken(id, data);
      if (res && res.status === 200) {
        console.log("update token success", res);
      }
    } catch (error) {
      console.log("Error send token", error);
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
